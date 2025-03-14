# `webhookSubscription` Submodule <a name="`webhookSubscription` Submodule" id="@cdktf/provider-pagerduty.webhookSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookSubscription <a name="WebhookSubscription" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription pagerduty_webhook_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscription;

WebhookSubscription.Builder.create(Construct scope, java.lang.String id)
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
    .deliveryMethod(IResolvable)
    .deliveryMethod(java.util.List<WebhookSubscriptionDeliveryMethod>)
    .events(java.util.List<java.lang.String>)
    .filter(IResolvable)
    .filter(java.util.List<WebhookSubscriptionFilter>)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.deliveryMethod">deliveryMethod</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>></code> | delivery_method block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#events WebhookSubscription#events}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#active WebhookSubscription#active}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#description WebhookSubscription#description}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryMethod`<sup>Required</sup> <a name="deliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.deliveryMethod"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>>

delivery_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#events WebhookSubscription#events}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#filter WebhookSubscription#filter}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#active WebhookSubscription#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#description WebhookSubscription#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod">putDeliveryMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryMethod` <a name="putDeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod"></a>

```java
public void putDeliveryMethod(IResolvable OR java.util.List<WebhookSubscriptionDeliveryMethod> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<WebhookSubscriptionFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive"></a>

```java
public void resetActive()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscription;

WebhookSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscription;

WebhookSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscription;

WebhookSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscription;

WebhookSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WebhookSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WebhookSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WebhookSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WebhookSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod">deliveryMethod</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput">deliveryMethodInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryMethod`<sup>Required</sup> <a name="deliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod"></a>

```java
public WebhookSubscriptionDeliveryMethodList getDeliveryMethod();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter"></a>

```java
public WebhookSubscriptionFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deliveryMethodInput`<sup>Optional</sup> <a name="deliveryMethodInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput"></a>

```java
public java.lang.Object getDeliveryMethodInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookSubscriptionConfig <a name="WebhookSubscriptionConfig" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionConfig;

WebhookSubscriptionConfig.builder()
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
    .deliveryMethod(IResolvable)
    .deliveryMethod(java.util.List<WebhookSubscriptionDeliveryMethod>)
    .events(java.util.List<java.lang.String>)
    .filter(IResolvable)
    .filter(java.util.List<WebhookSubscriptionFilter>)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod">deliveryMethod</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>></code> | delivery_method block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#events WebhookSubscription#events}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#active WebhookSubscription#active}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#description WebhookSubscription#description}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryMethod`<sup>Required</sup> <a name="deliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod"></a>

```java
public java.lang.Object getDeliveryMethod();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>>

delivery_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#events WebhookSubscription#events}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#filter WebhookSubscription#filter}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#active WebhookSubscription#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#description WebhookSubscription#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

### WebhookSubscriptionDeliveryMethod <a name="WebhookSubscriptionDeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethod;

WebhookSubscriptionDeliveryMethod.builder()
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<WebhookSubscriptionDeliveryMethodCustomHeader>)
//  .temporarilyDisabled(java.lang.Boolean)
//  .temporarilyDisabled(IResolvable)
//  .type(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled">temporarilyDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#url WebhookSubscription#url}. |

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader"></a>

```java
public java.lang.Object getCustomHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#custom_header WebhookSubscription#custom_header}

---

##### `temporarilyDisabled`<sup>Optional</sup> <a name="temporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled"></a>

```java
public java.lang.Object getTemporarilyDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#url WebhookSubscription#url}.

---

### WebhookSubscriptionDeliveryMethodCustomHeader <a name="WebhookSubscriptionDeliveryMethodCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethodCustomHeader;

WebhookSubscriptionDeliveryMethodCustomHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#name WebhookSubscription#name}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#value WebhookSubscription#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#name WebhookSubscription#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#value WebhookSubscription#value}.

---

### WebhookSubscriptionFilter <a name="WebhookSubscriptionFilter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionFilter;

WebhookSubscriptionFilter.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WebhookSubscriptionDeliveryMethodCustomHeaderList <a name="WebhookSubscriptionDeliveryMethodCustomHeaderList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethodCustomHeaderList;

new WebhookSubscriptionDeliveryMethodCustomHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get"></a>

```java
public WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>>

---


### WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference <a name="WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference;

new WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>

---


### WebhookSubscriptionDeliveryMethodList <a name="WebhookSubscriptionDeliveryMethodList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethodList;

new WebhookSubscriptionDeliveryMethodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get"></a>

```java
public WebhookSubscriptionDeliveryMethodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>>

---


### WebhookSubscriptionDeliveryMethodOutputReference <a name="WebhookSubscriptionDeliveryMethodOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionDeliveryMethodOutputReference;

new WebhookSubscriptionDeliveryMethodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled">resetTemporarilyDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader"></a>

```java
public void putCustomHeader(IResolvable OR java.util.List<WebhookSubscriptionDeliveryMethodCustomHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>>

---

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader"></a>

```java
public void resetCustomHeader()
```

##### `resetTemporarilyDisabled` <a name="resetTemporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled"></a>

```java
public void resetTemporarilyDisabled()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput">customHeaderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput">temporarilyDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled">temporarilyDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader"></a>

```java
public WebhookSubscriptionDeliveryMethodCustomHeaderList getCustomHeader();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a>

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput"></a>

```java
public java.lang.Object getCustomHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>>

---

##### `temporarilyDisabledInput`<sup>Optional</sup> <a name="temporarilyDisabledInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput"></a>

```java
public java.lang.Object getTemporarilyDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `temporarilyDisabled`<sup>Required</sup> <a name="temporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled"></a>

```java
public java.lang.Object getTemporarilyDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>

---


### WebhookSubscriptionFilterList <a name="WebhookSubscriptionFilterList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionFilterList;

new WebhookSubscriptionFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get"></a>

```java
public WebhookSubscriptionFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>>

---


### WebhookSubscriptionFilterOutputReference <a name="WebhookSubscriptionFilterOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.webhook_subscription.WebhookSubscriptionFilterOutputReference;

new WebhookSubscriptionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>

---



