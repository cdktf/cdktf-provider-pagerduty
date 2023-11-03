# `pagerduty_service_integration`

Refer to the Terraform Registory for docs: [`pagerduty_service_integration`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration).

# `serviceIntegration` Submodule <a name="`serviceIntegration` Submodule" id="@cdktf/provider-pagerduty.serviceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceIntegration <a name="ServiceIntegration" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration pagerduty_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegration;

ServiceIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .service(java.lang.String)
//  .emailFilter(IResolvable)
//  .emailFilter(java.util.List<ServiceIntegrationEmailFilter>)
//  .emailFilterMode(java.lang.String)
//  .emailIncidentCreation(java.lang.String)
//  .emailParser(IResolvable)
//  .emailParser(java.util.List<ServiceIntegrationEmailParser>)
//  .emailParsingFallback(java.lang.String)
//  .id(java.lang.String)
//  .integrationEmail(java.lang.String)
//  .integrationKey(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .vendor(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilter">emailFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>></code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilterMode">emailFilterMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailIncidentCreation">emailIncidentCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParser">emailParser</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>></code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParsingFallback">emailParsingFallback</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationEmail">integrationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.vendor">vendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `emailFilter`<sup>Optional</sup> <a name="emailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>>

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `emailFilterMode`<sup>Optional</sup> <a name="emailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilterMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `emailIncidentCreation`<sup>Optional</sup> <a name="emailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailIncidentCreation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `emailParser`<sup>Optional</sup> <a name="emailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParser"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>>

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `emailParsingFallback`<sup>Optional</sup> <a name="emailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParsingFallback"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationEmail`<sup>Optional</sup> <a name="integrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `integrationKey`<sup>Optional</sup> <a name="integrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.vendor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter">putEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser">putEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter">resetEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode">resetEmailFilterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation">resetEmailIncidentCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser">resetEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback">resetEmailParsingFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail">resetIntegrationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey">resetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor">resetVendor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putEmailFilter` <a name="putEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter"></a>

```java
public void putEmailFilter(IResolvable OR java.util.List<ServiceIntegrationEmailFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>>

---

##### `putEmailParser` <a name="putEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser"></a>

```java
public void putEmailParser(IResolvable OR java.util.List<ServiceIntegrationEmailParser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>>

---

##### `resetEmailFilter` <a name="resetEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter"></a>

```java
public void resetEmailFilter()
```

##### `resetEmailFilterMode` <a name="resetEmailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode"></a>

```java
public void resetEmailFilterMode()
```

##### `resetEmailIncidentCreation` <a name="resetEmailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation"></a>

```java
public void resetEmailIncidentCreation()
```

##### `resetEmailParser` <a name="resetEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser"></a>

```java
public void resetEmailParser()
```

##### `resetEmailParsingFallback` <a name="resetEmailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback"></a>

```java
public void resetEmailParsingFallback()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationEmail` <a name="resetIntegrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail"></a>

```java
public void resetIntegrationEmail()
```

##### `resetIntegrationKey` <a name="resetIntegrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey"></a>

```java
public void resetIntegrationKey()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType"></a>

```java
public void resetType()
```

##### `resetVendor` <a name="resetVendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor"></a>

```java
public void resetVendor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegration;

ServiceIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegration;

ServiceIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegration;

ServiceIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegration;

ServiceIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter">emailFilter</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser">emailParser</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput">emailFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput">emailFilterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput">emailIncidentCreationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput">emailParserInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput">emailParsingFallbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput">integrationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput">integrationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput">vendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode">emailFilterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation">emailIncidentCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback">emailParsingFallback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail">integrationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailFilter`<sup>Required</sup> <a name="emailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter"></a>

```java
public ServiceIntegrationEmailFilterList getEmailFilter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a>

---

##### `emailParser`<sup>Required</sup> <a name="emailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser"></a>

```java
public ServiceIntegrationEmailParserList getEmailParser();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a>

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `emailFilterInput`<sup>Optional</sup> <a name="emailFilterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput"></a>

```java
public java.lang.Object getEmailFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>>

---

##### `emailFilterModeInput`<sup>Optional</sup> <a name="emailFilterModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput"></a>

```java
public java.lang.String getEmailFilterModeInput();
```

- *Type:* java.lang.String

---

##### `emailIncidentCreationInput`<sup>Optional</sup> <a name="emailIncidentCreationInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput"></a>

```java
public java.lang.String getEmailIncidentCreationInput();
```

- *Type:* java.lang.String

---

##### `emailParserInput`<sup>Optional</sup> <a name="emailParserInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput"></a>

```java
public java.lang.Object getEmailParserInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>>

---

##### `emailParsingFallbackInput`<sup>Optional</sup> <a name="emailParsingFallbackInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput"></a>

```java
public java.lang.String getEmailParsingFallbackInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationEmailInput`<sup>Optional</sup> <a name="integrationEmailInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput"></a>

```java
public java.lang.String getIntegrationEmailInput();
```

- *Type:* java.lang.String

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput"></a>

```java
public java.lang.String getIntegrationKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput"></a>

```java
public java.lang.String getVendorInput();
```

- *Type:* java.lang.String

---

##### `emailFilterMode`<sup>Required</sup> <a name="emailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode"></a>

```java
public java.lang.String getEmailFilterMode();
```

- *Type:* java.lang.String

---

##### `emailIncidentCreation`<sup>Required</sup> <a name="emailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation"></a>

```java
public java.lang.String getEmailIncidentCreation();
```

- *Type:* java.lang.String

---

##### `emailParsingFallback`<sup>Required</sup> <a name="emailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback"></a>

```java
public java.lang.String getEmailParsingFallback();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationEmail`<sup>Required</sup> <a name="integrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail"></a>

```java
public java.lang.String getIntegrationEmail();
```

- *Type:* java.lang.String

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceIntegrationConfig <a name="ServiceIntegrationConfig" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationConfig;

ServiceIntegrationConfig.builder()
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
    .service(java.lang.String)
//  .emailFilter(IResolvable)
//  .emailFilter(java.util.List<ServiceIntegrationEmailFilter>)
//  .emailFilterMode(java.lang.String)
//  .emailIncidentCreation(java.lang.String)
//  .emailParser(IResolvable)
//  .emailParser(java.util.List<ServiceIntegrationEmailParser>)
//  .emailParsingFallback(java.lang.String)
//  .id(java.lang.String)
//  .integrationEmail(java.lang.String)
//  .integrationKey(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .vendor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter">emailFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>></code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode">emailFilterMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation">emailIncidentCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser">emailParser</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>></code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback">emailParsingFallback</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail">integrationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor">vendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `emailFilter`<sup>Optional</sup> <a name="emailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter"></a>

```java
public java.lang.Object getEmailFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>>

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `emailFilterMode`<sup>Optional</sup> <a name="emailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode"></a>

```java
public java.lang.String getEmailFilterMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `emailIncidentCreation`<sup>Optional</sup> <a name="emailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation"></a>

```java
public java.lang.String getEmailIncidentCreation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `emailParser`<sup>Optional</sup> <a name="emailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser"></a>

```java
public java.lang.Object getEmailParser();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>>

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `emailParsingFallback`<sup>Optional</sup> <a name="emailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback"></a>

```java
public java.lang.String getEmailParsingFallback();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationEmail`<sup>Optional</sup> <a name="integrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail"></a>

```java
public java.lang.String getIntegrationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `integrationKey`<sup>Optional</sup> <a name="integrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

### ServiceIntegrationEmailFilter <a name="ServiceIntegrationEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailFilter;

ServiceIntegrationEmailFilter.builder()
//  .bodyMode(java.lang.String)
//  .bodyRegex(java.lang.String)
//  .fromEmailMode(java.lang.String)
//  .fromEmailRegex(java.lang.String)
//  .subjectMode(java.lang.String)
//  .subjectRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode">bodyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex">bodyRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode">fromEmailMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex">fromEmailRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode">subjectMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex">subjectRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}. |

---

##### `bodyMode`<sup>Optional</sup> <a name="bodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode"></a>

```java
public java.lang.String getBodyMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}.

---

##### `bodyRegex`<sup>Optional</sup> <a name="bodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex"></a>

```java
public java.lang.String getBodyRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}.

---

##### `fromEmailMode`<sup>Optional</sup> <a name="fromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode"></a>

```java
public java.lang.String getFromEmailMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}.

---

##### `fromEmailRegex`<sup>Optional</sup> <a name="fromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex"></a>

```java
public java.lang.String getFromEmailRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}.

---

##### `subjectMode`<sup>Optional</sup> <a name="subjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode"></a>

```java
public java.lang.String getSubjectMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}.

---

##### `subjectRegex`<sup>Optional</sup> <a name="subjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex"></a>

```java
public java.lang.String getSubjectRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}.

---

### ServiceIntegrationEmailParser <a name="ServiceIntegrationEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParser;

ServiceIntegrationEmailParser.builder()
    .action(java.lang.String)
    .matchPredicate(ServiceIntegrationEmailParserMatchPredicate)
//  .valueExtractor(IResolvable)
//  .valueExtractor(java.util.List<ServiceIntegrationEmailParserValueExtractor>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#action ServiceIntegration#action}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate">matchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | match_predicate block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor">valueExtractor</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>></code> | value_extractor block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#action ServiceIntegration#action}.

---

##### `matchPredicate`<sup>Required</sup> <a name="matchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate"></a>

```java
public ServiceIntegrationEmailParserMatchPredicate getMatchPredicate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

match_predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#match_predicate ServiceIntegration#match_predicate}

---

##### `valueExtractor`<sup>Optional</sup> <a name="valueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor"></a>

```java
public java.lang.Object getValueExtractor();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>>

value_extractor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#value_extractor ServiceIntegration#value_extractor}

---

### ServiceIntegrationEmailParserMatchPredicate <a name="ServiceIntegrationEmailParserMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicate;

ServiceIntegrationEmailParserMatchPredicate.builder()
    .type(java.lang.String)
//  .predicate(IResolvable)
//  .predicate(java.util.List<ServiceIntegrationEmailParserMatchPredicatePredicate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate">predicate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>></code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate"></a>

```java
public java.lang.Object getPredicate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicate;

ServiceIntegrationEmailParserMatchPredicatePredicate.builder()
    .type(java.lang.String)
//  .matcher(java.lang.String)
//  .part(java.lang.String)
//  .predicate(IResolvable)
//  .predicate(java.util.List<ServiceIntegrationEmailParserMatchPredicatePredicatePredicate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher">matcher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part">part</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate">predicate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>></code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate"></a>

```java
public java.lang.Object getPredicate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate;

ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.builder()
    .matcher(java.lang.String)
    .part(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher">matcher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part">part</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

### ServiceIntegrationEmailParserValueExtractor <a name="ServiceIntegrationEmailParserValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserValueExtractor;

ServiceIntegrationEmailParserValueExtractor.builder()
    .part(java.lang.String)
    .type(java.lang.String)
    .valueName(java.lang.String)
//  .endsBefore(java.lang.String)
//  .regex(java.lang.String)
//  .startsAfter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part">part</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName">valueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#value_name ServiceIntegration#value_name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore">endsBefore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#regex ServiceIntegration#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter">startsAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}. |

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `valueName`<sup>Required</sup> <a name="valueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName"></a>

```java
public java.lang.String getValueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#value_name ServiceIntegration#value_name}.

---

##### `endsBefore`<sup>Optional</sup> <a name="endsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore"></a>

```java
public java.lang.String getEndsBefore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#regex ServiceIntegration#regex}.

---

##### `startsAfter`<sup>Optional</sup> <a name="startsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter"></a>

```java
public java.lang.String getStartsAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.1/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceIntegrationEmailFilterList <a name="ServiceIntegrationEmailFilterList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailFilterList;

new ServiceIntegrationEmailFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get"></a>

```java
public ServiceIntegrationEmailFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>>

---


### ServiceIntegrationEmailFilterOutputReference <a name="ServiceIntegrationEmailFilterOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailFilterOutputReference;

new ServiceIntegrationEmailFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode">resetBodyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex">resetBodyRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode">resetFromEmailMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex">resetFromEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode">resetSubjectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex">resetSubjectRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBodyMode` <a name="resetBodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode"></a>

```java
public void resetBodyMode()
```

##### `resetBodyRegex` <a name="resetBodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex"></a>

```java
public void resetBodyRegex()
```

##### `resetFromEmailMode` <a name="resetFromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode"></a>

```java
public void resetFromEmailMode()
```

##### `resetFromEmailRegex` <a name="resetFromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex"></a>

```java
public void resetFromEmailRegex()
```

##### `resetSubjectMode` <a name="resetSubjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode"></a>

```java
public void resetSubjectMode()
```

##### `resetSubjectRegex` <a name="resetSubjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex"></a>

```java
public void resetSubjectRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput">bodyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput">bodyRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput">fromEmailModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput">fromEmailRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput">subjectModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput">subjectRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode">bodyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex">bodyRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode">fromEmailMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex">fromEmailRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode">subjectMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex">subjectRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `bodyModeInput`<sup>Optional</sup> <a name="bodyModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput"></a>

```java
public java.lang.String getBodyModeInput();
```

- *Type:* java.lang.String

---

##### `bodyRegexInput`<sup>Optional</sup> <a name="bodyRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput"></a>

```java
public java.lang.String getBodyRegexInput();
```

- *Type:* java.lang.String

---

##### `fromEmailModeInput`<sup>Optional</sup> <a name="fromEmailModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput"></a>

```java
public java.lang.String getFromEmailModeInput();
```

- *Type:* java.lang.String

---

##### `fromEmailRegexInput`<sup>Optional</sup> <a name="fromEmailRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput"></a>

```java
public java.lang.String getFromEmailRegexInput();
```

- *Type:* java.lang.String

---

##### `subjectModeInput`<sup>Optional</sup> <a name="subjectModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput"></a>

```java
public java.lang.String getSubjectModeInput();
```

- *Type:* java.lang.String

---

##### `subjectRegexInput`<sup>Optional</sup> <a name="subjectRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput"></a>

```java
public java.lang.String getSubjectRegexInput();
```

- *Type:* java.lang.String

---

##### `bodyMode`<sup>Required</sup> <a name="bodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode"></a>

```java
public java.lang.String getBodyMode();
```

- *Type:* java.lang.String

---

##### `bodyRegex`<sup>Required</sup> <a name="bodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex"></a>

```java
public java.lang.String getBodyRegex();
```

- *Type:* java.lang.String

---

##### `fromEmailMode`<sup>Required</sup> <a name="fromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode"></a>

```java
public java.lang.String getFromEmailMode();
```

- *Type:* java.lang.String

---

##### `fromEmailRegex`<sup>Required</sup> <a name="fromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex"></a>

```java
public java.lang.String getFromEmailRegex();
```

- *Type:* java.lang.String

---

##### `subjectMode`<sup>Required</sup> <a name="subjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode"></a>

```java
public java.lang.String getSubjectMode();
```

- *Type:* java.lang.String

---

##### `subjectRegex`<sup>Required</sup> <a name="subjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex"></a>

```java
public java.lang.String getSubjectRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>

---


### ServiceIntegrationEmailParserList <a name="ServiceIntegrationEmailParserList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserList;

new ServiceIntegrationEmailParserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get"></a>

```java
public ServiceIntegrationEmailParserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>>

---


### ServiceIntegrationEmailParserMatchPredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicateOutputReference;

new ServiceIntegrationEmailParserMatchPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate"></a>

```java
public void putPredicate(IResolvable OR java.util.List<ServiceIntegrationEmailParserMatchPredicatePredicate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>>

---

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate"></a>

```java
public void resetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput">predicateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate"></a>

```java
public ServiceIntegrationEmailParserMatchPredicatePredicateList getPredicate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a>

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput"></a>

```java
public java.lang.Object getPredicateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue"></a>

```java
public ServiceIntegrationEmailParserMatchPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicateList;

new ServiceIntegrationEmailParserMatchPredicatePredicateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get"></a>

```java
public ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>>

---


### ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference;

new ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart">resetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate"></a>

```java
public void putPredicate(IResolvable OR java.util.List<ServiceIntegrationEmailParserMatchPredicatePredicatePredicate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>>

---

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart"></a>

```java
public void resetPart()
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate"></a>

```java
public void resetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput">partInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput">predicateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate"></a>

```java
public ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList getPredicate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a>

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput"></a>

```java
public java.lang.String getPartInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput"></a>

```java
public java.lang.Object getPredicateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList;

new ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get"></a>

```java
public ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>>

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference;

new ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput">partInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput"></a>

```java
public java.lang.String getPartInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>

---


### ServiceIntegrationEmailParserOutputReference <a name="ServiceIntegrationEmailParserOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserOutputReference;

new ServiceIntegrationEmailParserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate">putMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor">putValueExtractor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor">resetValueExtractor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchPredicate` <a name="putMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate"></a>

```java
public void putMatchPredicate(ServiceIntegrationEmailParserMatchPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `putValueExtractor` <a name="putValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor"></a>

```java
public void putValueExtractor(IResolvable OR java.util.List<ServiceIntegrationEmailParserValueExtractor> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>>

---

##### `resetValueExtractor` <a name="resetValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor"></a>

```java
public void resetValueExtractor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate">matchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor">valueExtractor</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput">matchPredicateInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput">valueExtractorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `matchPredicate`<sup>Required</sup> <a name="matchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate"></a>

```java
public ServiceIntegrationEmailParserMatchPredicateOutputReference getMatchPredicate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a>

---

##### `valueExtractor`<sup>Required</sup> <a name="valueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor"></a>

```java
public ServiceIntegrationEmailParserValueExtractorList getValueExtractor();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `matchPredicateInput`<sup>Optional</sup> <a name="matchPredicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput"></a>

```java
public ServiceIntegrationEmailParserMatchPredicate getMatchPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `valueExtractorInput`<sup>Optional</sup> <a name="valueExtractorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput"></a>

```java
public java.lang.Object getValueExtractorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>

---


### ServiceIntegrationEmailParserValueExtractorList <a name="ServiceIntegrationEmailParserValueExtractorList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserValueExtractorList;

new ServiceIntegrationEmailParserValueExtractorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get"></a>

```java
public ServiceIntegrationEmailParserValueExtractorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>>

---


### ServiceIntegrationEmailParserValueExtractorOutputReference <a name="ServiceIntegrationEmailParserValueExtractorOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_integration.ServiceIntegrationEmailParserValueExtractorOutputReference;

new ServiceIntegrationEmailParserValueExtractorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore">resetEndsBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter">resetStartsAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsBefore` <a name="resetEndsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore"></a>

```java
public void resetEndsBefore()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetStartsAfter` <a name="resetStartsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter"></a>

```java
public void resetStartsAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput">endsBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput">partInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput">startsAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput">valueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore">endsBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter">startsAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName">valueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endsBeforeInput`<sup>Optional</sup> <a name="endsBeforeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput"></a>

```java
public java.lang.String getEndsBeforeInput();
```

- *Type:* java.lang.String

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput"></a>

```java
public java.lang.String getPartInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `startsAfterInput`<sup>Optional</sup> <a name="startsAfterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput"></a>

```java
public java.lang.String getStartsAfterInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueNameInput`<sup>Optional</sup> <a name="valueNameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput"></a>

```java
public java.lang.String getValueNameInput();
```

- *Type:* java.lang.String

---

##### `endsBefore`<sup>Required</sup> <a name="endsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore"></a>

```java
public java.lang.String getEndsBefore();
```

- *Type:* java.lang.String

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `startsAfter`<sup>Required</sup> <a name="startsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter"></a>

```java
public java.lang.String getStartsAfter();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valueName`<sup>Required</sup> <a name="valueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName"></a>

```java
public java.lang.String getValueName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>

---



