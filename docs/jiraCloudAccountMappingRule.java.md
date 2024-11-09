# `jiraCloudAccountMappingRule` Submodule <a name="`jiraCloudAccountMappingRule` Submodule" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JiraCloudAccountMappingRule <a name="JiraCloudAccountMappingRule" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule pagerduty_jira_cloud_account_mapping_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRule;

JiraCloudAccountMappingRule.Builder.create(Construct scope, java.lang.String id)
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
    .accountMapping(java.lang.String)
    .name(java.lang.String)
//  .config(JiraCloudAccountMappingRuleConfigA)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.accountMapping">accountMapping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a></code> | config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountMapping`<sup>Required</sup> <a name="accountMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.accountMapping"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#config JiraCloudAccountMappingRule#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig"></a>

```java
public void putConfig(JiraCloudAccountMappingRuleConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetConfig"></a>

```java
public void resetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JiraCloudAccountMappingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRule;

JiraCloudAccountMappingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRule;

JiraCloudAccountMappingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRule;

JiraCloudAccountMappingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRule;

JiraCloudAccountMappingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),JiraCloudAccountMappingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a JiraCloudAccountMappingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the JiraCloudAccountMappingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing JiraCloudAccountMappingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the JiraCloudAccountMappingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledReason">autocreateJqlDisabledReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledUntil">autocreateJqlDisabledUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference">JiraCloudAccountMappingRuleConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMappingInput">accountMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMapping">accountMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autocreateJqlDisabledReason`<sup>Required</sup> <a name="autocreateJqlDisabledReason" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledReason"></a>

```java
public java.lang.String getAutocreateJqlDisabledReason();
```

- *Type:* java.lang.String

---

##### `autocreateJqlDisabledUntil`<sup>Required</sup> <a name="autocreateJqlDisabledUntil" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledUntil"></a>

```java
public java.lang.String getAutocreateJqlDisabledUntil();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.config"></a>

```java
public JiraCloudAccountMappingRuleConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference">JiraCloudAccountMappingRuleConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountMappingInput`<sup>Optional</sup> <a name="accountMappingInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMappingInput"></a>

```java
public java.lang.String getAccountMappingInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountMapping`<sup>Required</sup> <a name="accountMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMapping"></a>

```java
public java.lang.String getAccountMapping();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JiraCloudAccountMappingRuleConfig <a name="JiraCloudAccountMappingRuleConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfig;

JiraCloudAccountMappingRuleConfig.builder()
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
    .accountMapping(java.lang.String)
    .name(java.lang.String)
//  .config(JiraCloudAccountMappingRuleConfigA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.accountMapping">accountMapping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a></code> | config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountMapping`<sup>Required</sup> <a name="accountMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.accountMapping"></a>

```java
public java.lang.String getAccountMapping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.config"></a>

```java
public JiraCloudAccountMappingRuleConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#config JiraCloudAccountMappingRule#config}

---

### JiraCloudAccountMappingRuleConfigA <a name="JiraCloudAccountMappingRuleConfigA" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigA;

JiraCloudAccountMappingRuleConfigA.builder()
    .service(java.lang.String)
//  .jira(JiraCloudAccountMappingRuleConfigJira)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#service JiraCloudAccountMappingRule#service}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a></code> | jira block. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#service JiraCloudAccountMappingRule#service}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.jira"></a>

```java
public JiraCloudAccountMappingRuleConfigJira getJira();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

jira block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#jira JiraCloudAccountMappingRule#jira}

---

### JiraCloudAccountMappingRuleConfigJira <a name="JiraCloudAccountMappingRuleConfigJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJira;

JiraCloudAccountMappingRuleConfigJira.builder()
    .issueType(JiraCloudAccountMappingRuleConfigJiraIssueType)
    .project(JiraCloudAccountMappingRuleConfigJiraProject)
//  .autocreateJql(java.lang.String)
//  .createIssueOnIncidentTrigger(java.lang.Boolean)
//  .createIssueOnIncidentTrigger(IResolvable)
//  .customFields(IResolvable)
//  .customFields(java.util.List<JiraCloudAccountMappingRuleConfigJiraCustomFields>)
//  .priorities(IResolvable)
//  .priorities(java.util.List<JiraCloudAccountMappingRuleConfigJiraPriorities>)
//  .statusMapping(JiraCloudAccountMappingRuleConfigJiraStatusMapping)
//  .syncNotesUser(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.issueType">issueType</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a></code> | issue_type block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.project">project</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a></code> | project block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.autocreateJql">autocreateJql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#autocreate_jql JiraCloudAccountMappingRule#autocreate_jql}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.createIssueOnIncidentTrigger">createIssueOnIncidentTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#create_issue_on_incident_trigger JiraCloudAccountMappingRule#create_issue_on_incident_trigger}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.customFields">customFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>></code> | custom_fields block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.priorities">priorities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>></code> | priorities block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.statusMapping">statusMapping</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a></code> | status_mapping block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.syncNotesUser">syncNotesUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#sync_notes_user JiraCloudAccountMappingRule#sync_notes_user}. |

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.issueType"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraIssueType getIssueType();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

issue_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#issue_type JiraCloudAccountMappingRule#issue_type}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.project"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraProject getProject();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#project JiraCloudAccountMappingRule#project}

---

##### `autocreateJql`<sup>Optional</sup> <a name="autocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.autocreateJql"></a>

```java
public java.lang.String getAutocreateJql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#autocreate_jql JiraCloudAccountMappingRule#autocreate_jql}.

---

##### `createIssueOnIncidentTrigger`<sup>Optional</sup> <a name="createIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.createIssueOnIncidentTrigger"></a>

```java
public java.lang.Object getCreateIssueOnIncidentTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#create_issue_on_incident_trigger JiraCloudAccountMappingRule#create_issue_on_incident_trigger}.

---

##### `customFields`<sup>Optional</sup> <a name="customFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.customFields"></a>

```java
public java.lang.Object getCustomFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>>

custom_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#custom_fields JiraCloudAccountMappingRule#custom_fields}

---

##### `priorities`<sup>Optional</sup> <a name="priorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.priorities"></a>

```java
public java.lang.Object getPriorities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>>

priorities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#priorities JiraCloudAccountMappingRule#priorities}

---

##### `statusMapping`<sup>Optional</sup> <a name="statusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.statusMapping"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMapping getStatusMapping();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

status_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#status_mapping JiraCloudAccountMappingRule#status_mapping}

---

##### `syncNotesUser`<sup>Optional</sup> <a name="syncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.syncNotesUser"></a>

```java
public java.lang.String getSyncNotesUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#sync_notes_user JiraCloudAccountMappingRule#sync_notes_user}.

---

### JiraCloudAccountMappingRuleConfigJiraCustomFields <a name="JiraCloudAccountMappingRuleConfigJiraCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraCustomFields;

JiraCloudAccountMappingRuleConfigJiraCustomFields.builder()
    .targetIssueField(java.lang.String)
    .targetIssueFieldName(java.lang.String)
    .type(java.lang.String)
//  .sourceIncidentField(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueField">targetIssueField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#target_issue_field JiraCloudAccountMappingRule#target_issue_field}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueFieldName">targetIssueFieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#target_issue_field_name JiraCloudAccountMappingRule#target_issue_field_name}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#type JiraCloudAccountMappingRule#type}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.sourceIncidentField">sourceIncidentField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#source_incident_field JiraCloudAccountMappingRule#source_incident_field}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#value JiraCloudAccountMappingRule#value}. |

---

##### `targetIssueField`<sup>Required</sup> <a name="targetIssueField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueField"></a>

```java
public java.lang.String getTargetIssueField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#target_issue_field JiraCloudAccountMappingRule#target_issue_field}.

---

##### `targetIssueFieldName`<sup>Required</sup> <a name="targetIssueFieldName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueFieldName"></a>

```java
public java.lang.String getTargetIssueFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#target_issue_field_name JiraCloudAccountMappingRule#target_issue_field_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#type JiraCloudAccountMappingRule#type}.

---

##### `sourceIncidentField`<sup>Optional</sup> <a name="sourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.sourceIncidentField"></a>

```java
public java.lang.String getSourceIncidentField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#source_incident_field JiraCloudAccountMappingRule#source_incident_field}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#value JiraCloudAccountMappingRule#value}.

---

### JiraCloudAccountMappingRuleConfigJiraIssueType <a name="JiraCloudAccountMappingRuleConfigJiraIssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraIssueType;

JiraCloudAccountMappingRuleConfigJiraIssueType.builder()
    .id(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraPriorities <a name="JiraCloudAccountMappingRuleConfigJiraPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraPriorities;

JiraCloudAccountMappingRuleConfigJiraPriorities.builder()
    .jiraId(java.lang.String)
    .pagerdutyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.jiraId">jiraId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#jira_id JiraCloudAccountMappingRule#jira_id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.pagerdutyId">pagerdutyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#pagerduty_id JiraCloudAccountMappingRule#pagerduty_id}. |

---

##### `jiraId`<sup>Required</sup> <a name="jiraId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.jiraId"></a>

```java
public java.lang.String getJiraId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#jira_id JiraCloudAccountMappingRule#jira_id}.

---

##### `pagerdutyId`<sup>Required</sup> <a name="pagerdutyId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.pagerdutyId"></a>

```java
public java.lang.String getPagerdutyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#pagerduty_id JiraCloudAccountMappingRule#pagerduty_id}.

---

### JiraCloudAccountMappingRuleConfigJiraProject <a name="JiraCloudAccountMappingRuleConfigJiraProject" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraProject;

JiraCloudAccountMappingRuleConfigJiraProject.builder()
    .id(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#key JiraCloudAccountMappingRule#key}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#key JiraCloudAccountMappingRule#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMapping <a name="JiraCloudAccountMappingRuleConfigJiraStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMapping;

JiraCloudAccountMappingRuleConfigJiraStatusMapping.builder()
    .triggered(JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered)
//  .acknowledged(JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged)
//  .resolved(JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.triggered">triggered</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a></code> | triggered block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.acknowledged">acknowledged</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a></code> | acknowledged block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.resolved">resolved</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a></code> | resolved block. |

---

##### `triggered`<sup>Required</sup> <a name="triggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.triggered"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered getTriggered();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#triggered JiraCloudAccountMappingRule#triggered}

---

##### `acknowledged`<sup>Optional</sup> <a name="acknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.acknowledged"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged getAcknowledged();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

acknowledged block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#acknowledged JiraCloudAccountMappingRule#acknowledged}

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.resolved"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved getResolved();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

resolved block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#resolved JiraCloudAccountMappingRule#resolved}

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged;

JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved;

JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered;

JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.builder()
    .id(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### JiraCloudAccountMappingRuleConfigAOutputReference <a name="JiraCloudAccountMappingRuleConfigAOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigAOutputReference;

new JiraCloudAccountMappingRuleConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resetJira">resetJira</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJira` <a name="putJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira"></a>

```java
public void putJira(JiraCloudAccountMappingRuleConfigJira value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

---

##### `resetJira` <a name="resetJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resetJira"></a>

```java
public void resetJira()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference">JiraCloudAccountMappingRuleConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jiraInput">jiraInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jira"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraOutputReference getJira();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference">JiraCloudAccountMappingRuleConfigJiraOutputReference</a>

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jiraInput"></a>

```java
public java.lang.Object getJiraInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

---


### JiraCloudAccountMappingRuleConfigJiraCustomFieldsList <a name="JiraCloudAccountMappingRuleConfigJiraCustomFieldsList" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList;

new JiraCloudAccountMappingRuleConfigJiraCustomFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>>

---


### JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference;

new JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetSourceIncidentField">resetSourceIncidentField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceIncidentField` <a name="resetSourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetSourceIncidentField"></a>

```java
public void resetSourceIncidentField()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentFieldInput">sourceIncidentFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldInput">targetIssueFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldNameInput">targetIssueFieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentField">sourceIncidentField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueField">targetIssueField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldName">targetIssueFieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceIncidentFieldInput`<sup>Optional</sup> <a name="sourceIncidentFieldInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentFieldInput"></a>

```java
public java.lang.String getSourceIncidentFieldInput();
```

- *Type:* java.lang.String

---

##### `targetIssueFieldInput`<sup>Optional</sup> <a name="targetIssueFieldInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldInput"></a>

```java
public java.lang.String getTargetIssueFieldInput();
```

- *Type:* java.lang.String

---

##### `targetIssueFieldNameInput`<sup>Optional</sup> <a name="targetIssueFieldNameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldNameInput"></a>

```java
public java.lang.String getTargetIssueFieldNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `sourceIncidentField`<sup>Required</sup> <a name="sourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentField"></a>

```java
public java.lang.String getSourceIncidentField();
```

- *Type:* java.lang.String

---

##### `targetIssueField`<sup>Required</sup> <a name="targetIssueField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueField"></a>

```java
public java.lang.String getTargetIssueField();
```

- *Type:* java.lang.String

---

##### `targetIssueFieldName`<sup>Required</sup> <a name="targetIssueFieldName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldName"></a>

```java
public java.lang.String getTargetIssueFieldName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>

---


### JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference;

new JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

---


### JiraCloudAccountMappingRuleConfigJiraOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraOutputReference;

new JiraCloudAccountMappingRuleConfigJiraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields">putCustomFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType">putIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities">putPriorities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject">putProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping">putStatusMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetAutocreateJql">resetAutocreateJql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCreateIssueOnIncidentTrigger">resetCreateIssueOnIncidentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCustomFields">resetCustomFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetPriorities">resetPriorities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetStatusMapping">resetStatusMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetSyncNotesUser">resetSyncNotesUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomFields` <a name="putCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields"></a>

```java
public void putCustomFields(IResolvable OR java.util.List<JiraCloudAccountMappingRuleConfigJiraCustomFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>>

---

##### `putIssueType` <a name="putIssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType"></a>

```java
public void putIssueType(JiraCloudAccountMappingRuleConfigJiraIssueType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

---

##### `putPriorities` <a name="putPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities"></a>

```java
public void putPriorities(IResolvable OR java.util.List<JiraCloudAccountMappingRuleConfigJiraPriorities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>>

---

##### `putProject` <a name="putProject" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject"></a>

```java
public void putProject(JiraCloudAccountMappingRuleConfigJiraProject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

---

##### `putStatusMapping` <a name="putStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping"></a>

```java
public void putStatusMapping(JiraCloudAccountMappingRuleConfigJiraStatusMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

---

##### `resetAutocreateJql` <a name="resetAutocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetAutocreateJql"></a>

```java
public void resetAutocreateJql()
```

##### `resetCreateIssueOnIncidentTrigger` <a name="resetCreateIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCreateIssueOnIncidentTrigger"></a>

```java
public void resetCreateIssueOnIncidentTrigger()
```

##### `resetCustomFields` <a name="resetCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCustomFields"></a>

```java
public void resetCustomFields()
```

##### `resetPriorities` <a name="resetPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetPriorities"></a>

```java
public void resetPriorities()
```

##### `resetStatusMapping` <a name="resetStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetStatusMapping"></a>

```java
public void resetStatusMapping()
```

##### `resetSyncNotesUser` <a name="resetSyncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetSyncNotesUser"></a>

```java
public void resetSyncNotesUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFields">customFields</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList">JiraCloudAccountMappingRuleConfigJiraCustomFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueType">issueType</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference">JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.priorities">priorities</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList">JiraCloudAccountMappingRuleConfigJiraPrioritiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.project">project</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference">JiraCloudAccountMappingRuleConfigJiraProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMapping">statusMapping</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJqlInput">autocreateJqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTriggerInput">createIssueOnIncidentTriggerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFieldsInput">customFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueTypeInput">issueTypeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.prioritiesInput">prioritiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.projectInput">projectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMappingInput">statusMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUserInput">syncNotesUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJql">autocreateJql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTrigger">createIssueOnIncidentTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUser">syncNotesUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customFields`<sup>Required</sup> <a name="customFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFields"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraCustomFieldsList getCustomFields();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList">JiraCloudAccountMappingRuleConfigJiraCustomFieldsList</a>

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueType"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference getIssueType();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference">JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference</a>

---

##### `priorities`<sup>Required</sup> <a name="priorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.priorities"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraPrioritiesList getPriorities();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList">JiraCloudAccountMappingRuleConfigJiraPrioritiesList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.project"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraProjectOutputReference getProject();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference">JiraCloudAccountMappingRuleConfigJiraProjectOutputReference</a>

---

##### `statusMapping`<sup>Required</sup> <a name="statusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMapping"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference getStatusMapping();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference</a>

---

##### `autocreateJqlInput`<sup>Optional</sup> <a name="autocreateJqlInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJqlInput"></a>

```java
public java.lang.String getAutocreateJqlInput();
```

- *Type:* java.lang.String

---

##### `createIssueOnIncidentTriggerInput`<sup>Optional</sup> <a name="createIssueOnIncidentTriggerInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTriggerInput"></a>

```java
public java.lang.Object getCreateIssueOnIncidentTriggerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customFieldsInput`<sup>Optional</sup> <a name="customFieldsInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFieldsInput"></a>

```java
public java.lang.Object getCustomFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields">JiraCloudAccountMappingRuleConfigJiraCustomFields</a>>

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueTypeInput"></a>

```java
public java.lang.Object getIssueTypeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

---

##### `prioritiesInput`<sup>Optional</sup> <a name="prioritiesInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.prioritiesInput"></a>

```java
public java.lang.Object getPrioritiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.projectInput"></a>

```java
public java.lang.Object getProjectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

---

##### `statusMappingInput`<sup>Optional</sup> <a name="statusMappingInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMappingInput"></a>

```java
public java.lang.Object getStatusMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

---

##### `syncNotesUserInput`<sup>Optional</sup> <a name="syncNotesUserInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUserInput"></a>

```java
public java.lang.String getSyncNotesUserInput();
```

- *Type:* java.lang.String

---

##### `autocreateJql`<sup>Required</sup> <a name="autocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJql"></a>

```java
public java.lang.String getAutocreateJql();
```

- *Type:* java.lang.String

---

##### `createIssueOnIncidentTrigger`<sup>Required</sup> <a name="createIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTrigger"></a>

```java
public java.lang.Object getCreateIssueOnIncidentTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncNotesUser`<sup>Required</sup> <a name="syncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUser"></a>

```java
public java.lang.String getSyncNotesUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

---


### JiraCloudAccountMappingRuleConfigJiraPrioritiesList <a name="JiraCloudAccountMappingRuleConfigJiraPrioritiesList" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList;

new JiraCloudAccountMappingRuleConfigJiraPrioritiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>>

---


### JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference;

new JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraIdInput">jiraIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyIdInput">pagerdutyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraId">jiraId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyId">pagerdutyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jiraIdInput`<sup>Optional</sup> <a name="jiraIdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraIdInput"></a>

```java
public java.lang.String getJiraIdInput();
```

- *Type:* java.lang.String

---

##### `pagerdutyIdInput`<sup>Optional</sup> <a name="pagerdutyIdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyIdInput"></a>

```java
public java.lang.String getPagerdutyIdInput();
```

- *Type:* java.lang.String

---

##### `jiraId`<sup>Required</sup> <a name="jiraId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraId"></a>

```java
public java.lang.String getJiraId();
```

- *Type:* java.lang.String

---

##### `pagerdutyId`<sup>Required</sup> <a name="pagerdutyId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyId"></a>

```java
public java.lang.String getPagerdutyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities">JiraCloudAccountMappingRuleConfigJiraPriorities</a>

---


### JiraCloudAccountMappingRuleConfigJiraProjectOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraProjectOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference;

new JiraCloudAccountMappingRuleConfigJiraProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged">putAcknowledged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved">putResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered">putTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetAcknowledged">resetAcknowledged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetResolved">resetResolved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcknowledged` <a name="putAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged"></a>

```java
public void putAcknowledged(JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

---

##### `putResolved` <a name="putResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved"></a>

```java
public void putResolved(JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

---

##### `putTriggered` <a name="putTriggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered"></a>

```java
public void putTriggered(JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

---

##### `resetAcknowledged` <a name="resetAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetAcknowledged"></a>

```java
public void resetAcknowledged()
```

##### `resetResolved` <a name="resetResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetResolved"></a>

```java
public void resetResolved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledged">acknowledged</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolved">resolved</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggered">triggered</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledgedInput">acknowledgedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolvedInput">resolvedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggeredInput">triggeredInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acknowledged`<sup>Required</sup> <a name="acknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledged"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference getAcknowledged();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference</a>

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolved"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference getResolved();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference</a>

---

##### `triggered`<sup>Required</sup> <a name="triggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggered"></a>

```java
public JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference getTriggered();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference</a>

---

##### `acknowledgedInput`<sup>Optional</sup> <a name="acknowledgedInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledgedInput"></a>

```java
public java.lang.Object getAcknowledgedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

---

##### `resolvedInput`<sup>Optional</sup> <a name="resolvedInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolvedInput"></a>

```java
public java.lang.Object getResolvedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

---

##### `triggeredInput`<sup>Optional</sup> <a name="triggeredInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggeredInput"></a>

```java
public java.lang.Object getTriggeredInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.jira_cloud_account_mapping_rule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

---



