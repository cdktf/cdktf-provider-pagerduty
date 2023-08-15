# `pagerduty_business_service_subscriber`

Refer to the Terraform Registory for docs: [`pagerduty_business_service_subscriber`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber).

# `businessServiceSubscriber` Submodule <a name="`businessServiceSubscriber` Submodule" id="@cdktf/provider-pagerduty.businessServiceSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BusinessServiceSubscriber <a name="BusinessServiceSubscriber" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber pagerduty_business_service_subscriber}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.business_service_subscriber.BusinessServiceSubscriber;

BusinessServiceSubscriber.Builder.create(Construct scope, java.lang.String id)
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
    .businessServiceId(java.lang.String)
    .subscriberId(java.lang.String)
    .subscriberType(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.businessServiceId">businessServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#business_service_id BusinessServiceSubscriber#business_service_id}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.subscriberId">subscriberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_id BusinessServiceSubscriber#subscriber_id}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.subscriberType">subscriberType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_type BusinessServiceSubscriber#subscriber_type}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#id BusinessServiceSubscriber#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessServiceId`<sup>Required</sup> <a name="businessServiceId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.businessServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#business_service_id BusinessServiceSubscriber#business_service_id}.

---

##### `subscriberId`<sup>Required</sup> <a name="subscriberId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.subscriberId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_id BusinessServiceSubscriber#subscriber_id}.

---

##### `subscriberType`<sup>Required</sup> <a name="subscriberType" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.subscriberType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_type BusinessServiceSubscriber#subscriber_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#id BusinessServiceSubscriber#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.business_service_subscriber.BusinessServiceSubscriber;

BusinessServiceSubscriber.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.business_service_subscriber.BusinessServiceSubscriber;

BusinessServiceSubscriber.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.business_service_subscriber.BusinessServiceSubscriber;

BusinessServiceSubscriber.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.businessServiceIdInput">businessServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberIdInput">subscriberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberTypeInput">subscriberTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.businessServiceId">businessServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberId">subscriberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberType">subscriberType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessServiceIdInput`<sup>Optional</sup> <a name="businessServiceIdInput" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.businessServiceIdInput"></a>

```java
public java.lang.String getBusinessServiceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subscriberIdInput`<sup>Optional</sup> <a name="subscriberIdInput" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberIdInput"></a>

```java
public java.lang.String getSubscriberIdInput();
```

- *Type:* java.lang.String

---

##### `subscriberTypeInput`<sup>Optional</sup> <a name="subscriberTypeInput" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberTypeInput"></a>

```java
public java.lang.String getSubscriberTypeInput();
```

- *Type:* java.lang.String

---

##### `businessServiceId`<sup>Required</sup> <a name="businessServiceId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.businessServiceId"></a>

```java
public java.lang.String getBusinessServiceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscriberId`<sup>Required</sup> <a name="subscriberId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberId"></a>

```java
public java.lang.String getSubscriberId();
```

- *Type:* java.lang.String

---

##### `subscriberType`<sup>Required</sup> <a name="subscriberType" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.subscriberType"></a>

```java
public java.lang.String getSubscriberType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriber.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BusinessServiceSubscriberConfig <a name="BusinessServiceSubscriberConfig" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.business_service_subscriber.BusinessServiceSubscriberConfig;

BusinessServiceSubscriberConfig.builder()
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
    .businessServiceId(java.lang.String)
    .subscriberId(java.lang.String)
    .subscriberType(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.businessServiceId">businessServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#business_service_id BusinessServiceSubscriber#business_service_id}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.subscriberId">subscriberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_id BusinessServiceSubscriber#subscriber_id}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.subscriberType">subscriberType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_type BusinessServiceSubscriber#subscriber_type}. |
| <code><a href="#@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#id BusinessServiceSubscriber#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessServiceId`<sup>Required</sup> <a name="businessServiceId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.businessServiceId"></a>

```java
public java.lang.String getBusinessServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#business_service_id BusinessServiceSubscriber#business_service_id}.

---

##### `subscriberId`<sup>Required</sup> <a name="subscriberId" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.subscriberId"></a>

```java
public java.lang.String getSubscriberId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_id BusinessServiceSubscriber#subscriber_id}.

---

##### `subscriberType`<sup>Required</sup> <a name="subscriberType" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.subscriberType"></a>

```java
public java.lang.String getSubscriberType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#subscriber_type BusinessServiceSubscriber#subscriber_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.businessServiceSubscriber.BusinessServiceSubscriberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/business_service_subscriber#id BusinessServiceSubscriber#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



