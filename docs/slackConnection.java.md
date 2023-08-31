# `pagerduty_slack_connection`

Refer to the Terraform Registory for docs: [`pagerduty_slack_connection`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection).

# `slackConnection` Submodule <a name="`slackConnection` Submodule" id="@cdktf/provider-pagerduty.slackConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SlackConnection <a name="SlackConnection" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection pagerduty_slack_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnection;

SlackConnection.Builder.create(Construct scope, java.lang.String id)
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
    .channelId(java.lang.String)
    .config(IResolvable)
    .config(java.util.List<SlackConnectionConfigA>)
    .notificationType(java.lang.String)
    .sourceId(java.lang.String)
    .sourceType(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_id SlackConnection#source_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_type SlackConnection#source_type}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#id SlackConnection#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#config SlackConnection#config}

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.notificationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.sourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_id SlackConnection#source_id}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.sourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_type SlackConnection#source_type}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#id SlackConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<SlackConnectionConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnection;

SlackConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnection;

SlackConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnection;

SlackConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList">SlackConnectionConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.notificationTypeInput">notificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.config"></a>

```java
public SlackConnectionConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList">SlackConnectionConfigAList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.notificationTypeInput"></a>

```java
public java.lang.String getNotificationTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SlackConnectionConfig <a name="SlackConnectionConfig" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnectionConfig;

SlackConnectionConfig.builder()
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
    .channelId(java.lang.String)
    .config(IResolvable)
    .config(java.util.List<SlackConnectionConfigA>)
    .notificationType(java.lang.String)
    .sourceId(java.lang.String)
    .sourceType(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_id SlackConnection#source_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_type SlackConnection#source_type}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#id SlackConnection#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#config SlackConnection#config}

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_id SlackConnection#source_id}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#source_type SlackConnection#source_type}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#id SlackConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SlackConnectionConfigA <a name="SlackConnectionConfigA" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnectionConfigA;

SlackConnectionConfigA.builder()
    .events(java.util.List<java.lang.String>)
//  .priorities(java.util.List<java.lang.String>)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#events SlackConnection#events}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.priorities">priorities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#priorities SlackConnection#priorities}. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#urgency SlackConnection#urgency}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#events SlackConnection#events}.

---

##### `priorities`<sup>Optional</sup> <a name="priorities" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.priorities"></a>

```java
public java.util.List<java.lang.String> getPriorities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#priorities SlackConnection#priorities}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/slack_connection#urgency SlackConnection#urgency}.

---

## Classes <a name="Classes" id="Classes"></a>

### SlackConnectionConfigAList <a name="SlackConnectionConfigAList" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnectionConfigAList;

new SlackConnectionConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get"></a>

```java
public SlackConnectionConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>>

---


### SlackConnectionConfigAOutputReference <a name="SlackConnectionConfigAOutputReference" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.slack_connection.SlackConnectionConfigAOutputReference;

new SlackConnectionConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetPriorities">resetPriorities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPriorities` <a name="resetPriorities" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetPriorities"></a>

```java
public void resetPriorities()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.prioritiesInput">prioritiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.priorities">priorities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prioritiesInput`<sup>Optional</sup> <a name="prioritiesInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.prioritiesInput"></a>

```java
public java.util.List<java.lang.String> getPrioritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priorities`<sup>Required</sup> <a name="priorities" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.priorities"></a>

```java
public java.util.List<java.lang.String> getPriorities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>

---



