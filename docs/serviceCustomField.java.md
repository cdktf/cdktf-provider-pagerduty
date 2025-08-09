# `serviceCustomField` Submodule <a name="`serviceCustomField` Submodule" id="@cdktf/provider-pagerduty.serviceCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomField <a name="ServiceCustomField" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field pagerduty_service_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomField;

ServiceCustomField.Builder.create(Construct scope, java.lang.String id)
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
    .dataType(java.lang.String)
    .displayName(java.lang.String)
    .fieldType(java.lang.String)
    .name(java.lang.String)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .fieldOption(IResolvable)
//  .fieldOption(java.util.List<ServiceCustomFieldFieldOption>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dataType">dataType</a></code> | <code>java.lang.String</code> | The kind of data the custom field is allowed to contain. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the field. This must be unique across an account. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldType">fieldType</a></code> | <code>java.lang.String</code> | The type of data this field contains. In combination with the `data_type` field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Default value for the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the data this field contains. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the field is enabled. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldOption">fieldOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>></code> | field_option block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dataType"></a>

- *Type:* java.lang.String

The kind of data the custom field is allowed to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldType"></a>

- *Type:* java.lang.String

The type of data this field contains. In combination with the `data_type` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the field.

May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#name ServiceCustomField#name}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

Default value for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the data this field contains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#description ServiceCustomField#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the field is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}

---

##### `fieldOption`<sup>Optional</sup> <a name="fieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldOption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>>

field_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption">putFieldOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption">resetFieldOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFieldOption` <a name="putFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption"></a>

```java
public void putFieldOption(IResolvable OR java.util.List<ServiceCustomFieldFieldOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFieldOption` <a name="resetFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption"></a>

```java
public void resetFieldOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomField;

ServiceCustomField.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomField;

ServiceCustomField.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomField;

ServiceCustomField.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomField;

ServiceCustomField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceCustomField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption">fieldOption</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput">fieldOptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput">fieldTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType">fieldType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fieldOption`<sup>Required</sup> <a name="fieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption"></a>

```java
public ServiceCustomFieldFieldOptionList getFieldOption();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fieldOptionInput`<sup>Optional</sup> <a name="fieldOptionInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput"></a>

```java
public java.lang.Object getFieldOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>>

---

##### `fieldTypeInput`<sup>Optional</sup> <a name="fieldTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput"></a>

```java
public java.lang.String getFieldTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType"></a>

```java
public java.lang.String getFieldType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomFieldConfig <a name="ServiceCustomFieldConfig" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomFieldConfig;

ServiceCustomFieldConfig.builder()
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
    .dataType(java.lang.String)
    .displayName(java.lang.String)
    .fieldType(java.lang.String)
    .name(java.lang.String)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .fieldOption(IResolvable)
//  .fieldOption(java.util.List<ServiceCustomFieldFieldOption>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType">dataType</a></code> | <code>java.lang.String</code> | The kind of data the custom field is allowed to contain. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the field. This must be unique across an account. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType">fieldType</a></code> | <code>java.lang.String</code> | The type of data this field contains. In combination with the `data_type` field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Default value for the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the data this field contains. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the field is enabled. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption">fieldOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>></code> | field_option block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

The kind of data the custom field is allowed to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType"></a>

```java
public java.lang.String getFieldType();
```

- *Type:* java.lang.String

The type of data this field contains. In combination with the `data_type` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the field.

May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#name ServiceCustomField#name}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Default value for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the data this field contains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#description ServiceCustomField#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the field is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}

---

##### `fieldOption`<sup>Optional</sup> <a name="fieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption"></a>

```java
public java.lang.Object getFieldOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>>

field_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}

---

### ServiceCustomFieldFieldOption <a name="ServiceCustomFieldFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomFieldFieldOption;

ServiceCustomFieldFieldOption.builder()
    .dataType(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#value ServiceCustomField#value}. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.0/docs/resources/service_custom_field#value ServiceCustomField#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCustomFieldFieldOptionList <a name="ServiceCustomFieldFieldOptionList" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomFieldFieldOptionList;

new ServiceCustomFieldFieldOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get"></a>

```java
public ServiceCustomFieldFieldOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>>

---


### ServiceCustomFieldFieldOptionOutputReference <a name="ServiceCustomFieldFieldOptionOutputReference" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service_custom_field.ServiceCustomFieldFieldOptionOutputReference;

new ServiceCustomFieldFieldOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>

---



