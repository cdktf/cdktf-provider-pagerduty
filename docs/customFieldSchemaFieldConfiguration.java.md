# `pagerduty_custom_field_schema_field_configuration`

Refer to the Terraform Registory for docs: [`pagerduty_custom_field_schema_field_configuration`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration).

# `customFieldSchemaFieldConfiguration` Submodule <a name="`customFieldSchemaFieldConfiguration` Submodule" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomFieldSchemaFieldConfiguration <a name="CustomFieldSchemaFieldConfiguration" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.custom_field_schema_field_configuration.CustomFieldSchemaFieldConfiguration;

CustomFieldSchemaFieldConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .field(java.lang.String)
    .schema(java.lang.String)
//  .defaultValue(java.lang.String)
//  .defaultValueDatatype(java.lang.String)
//  .defaultValueMultiValue(java.lang.Boolean)
//  .defaultValueMultiValue(IResolvable)
//  .id(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueDatatype">defaultValueDatatype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueMultiValue">defaultValueMultiValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.field"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `defaultValueDatatype`<sup>Optional</sup> <a name="defaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueDatatype"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `defaultValueMultiValue`<sup>Optional</sup> <a name="defaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueMultiValue"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype">resetDefaultValueDatatype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue">resetDefaultValueMultiValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDefaultValueDatatype` <a name="resetDefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype"></a>

```java
public void resetDefaultValueDatatype()
```

##### `resetDefaultValueMultiValue` <a name="resetDefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue"></a>

```java
public void resetDefaultValueMultiValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired"></a>

```java
public void resetRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.custom_field_schema_field_configuration.CustomFieldSchemaFieldConfiguration;

CustomFieldSchemaFieldConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.custom_field_schema_field_configuration.CustomFieldSchemaFieldConfiguration;

CustomFieldSchemaFieldConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.custom_field_schema_field_configuration.CustomFieldSchemaFieldConfiguration;

CustomFieldSchemaFieldConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput">defaultValueDatatypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput">defaultValueMultiValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype">defaultValueDatatype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue">defaultValueMultiValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultValueDatatypeInput`<sup>Optional</sup> <a name="defaultValueDatatypeInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput"></a>

```java
public java.lang.String getDefaultValueDatatypeInput();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `defaultValueMultiValueInput`<sup>Optional</sup> <a name="defaultValueMultiValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput"></a>

```java
public java.lang.Object getDefaultValueMultiValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `defaultValueDatatype`<sup>Required</sup> <a name="defaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype"></a>

```java
public java.lang.String getDefaultValueDatatype();
```

- *Type:* java.lang.String

---

##### `defaultValueMultiValue`<sup>Required</sup> <a name="defaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue"></a>

```java
public java.lang.Object getDefaultValueMultiValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldSchemaFieldConfigurationConfig <a name="CustomFieldSchemaFieldConfigurationConfig" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.custom_field_schema_field_configuration.CustomFieldSchemaFieldConfigurationConfig;

CustomFieldSchemaFieldConfigurationConfig.builder()
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
    .field(java.lang.String)
    .schema(java.lang.String)
//  .defaultValue(java.lang.String)
//  .defaultValueDatatype(java.lang.String)
//  .defaultValueMultiValue(java.lang.Boolean)
//  .defaultValueMultiValue(IResolvable)
//  .id(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype">defaultValueDatatype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue">defaultValueMultiValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `defaultValueDatatype`<sup>Optional</sup> <a name="defaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype"></a>

```java
public java.lang.String getDefaultValueDatatype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `defaultValueMultiValue`<sup>Optional</sup> <a name="defaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue"></a>

```java
public java.lang.Object getDefaultValueMultiValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.1/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---



