# `data_pagerduty_licenses`

Refer to the Terraform Registory for docs: [`data_pagerduty_licenses`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses).

# `dataPagerdutyLicenses` Submodule <a name="`dataPagerdutyLicenses` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicenses <a name="DataPagerdutyLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses pagerduty_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicenses;

DataPagerdutyLicenses.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .licenses(IResolvable)
//  .licenses(java.util.List<DataPagerdutyLicensesLicenses>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.licenses">licenses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>></code> | licenses block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.licenses"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>>

licenses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#licenses DataPagerdutyLicenses#licenses}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses">putLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses">resetLicenses</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLicenses` <a name="putLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses"></a>

```java
public void putLicenses(IResolvable OR java.util.List<DataPagerdutyLicensesLicenses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId"></a>

```java
public void resetId()
```

##### `resetLicenses` <a name="resetLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses"></a>

```java
public void resetLicenses()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicenses;

DataPagerdutyLicenses.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicenses;

DataPagerdutyLicenses.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicenses;

DataPagerdutyLicenses.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses">licenses</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput">licensesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses"></a>

```java
public DataPagerdutyLicensesLicensesList getLicenses();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licensesInput`<sup>Optional</sup> <a name="licensesInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput"></a>

```java
public java.lang.Object getLicensesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicensesConfig <a name="DataPagerdutyLicensesConfig" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicensesConfig;

DataPagerdutyLicensesConfig.builder()
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
//  .id(java.lang.String)
//  .licenses(IResolvable)
//  .licenses(java.util.List<DataPagerdutyLicensesLicenses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses">licenses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>></code> | licenses block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses"></a>

```java
public java.lang.Object getLicenses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>>

licenses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#licenses DataPagerdutyLicenses#licenses}

---

### DataPagerdutyLicensesLicenses <a name="DataPagerdutyLicensesLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicensesLicenses;

DataPagerdutyLicensesLicenses.builder()
//  .allocationsAvailable(java.lang.Number)
//  .currentValue(java.lang.Number)
//  .description(java.lang.String)
//  .htmlUrl(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .roleGroup(java.lang.String)
//  .selfAttribute(java.lang.String)
//  .summary(java.lang.String)
//  .type(java.lang.String)
//  .validRoles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable">allocationsAvailable</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#allocations_available DataPagerdutyLicenses#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue">currentValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#current_value DataPagerdutyLicenses#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#description DataPagerdutyLicenses#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#html_url DataPagerdutyLicenses#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#name DataPagerdutyLicenses#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup">roleGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#role_group DataPagerdutyLicenses#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#self DataPagerdutyLicenses#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#summary DataPagerdutyLicenses#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#type DataPagerdutyLicenses#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles">validRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#valid_roles DataPagerdutyLicenses#valid_roles}. |

---

##### `allocationsAvailable`<sup>Optional</sup> <a name="allocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable"></a>

```java
public java.lang.Number getAllocationsAvailable();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#allocations_available DataPagerdutyLicenses#allocations_available}.

---

##### `currentValue`<sup>Optional</sup> <a name="currentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue"></a>

```java
public java.lang.Number getCurrentValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#current_value DataPagerdutyLicenses#current_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#description DataPagerdutyLicenses#description}.

---

##### `htmlUrl`<sup>Optional</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#html_url DataPagerdutyLicenses#html_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#name DataPagerdutyLicenses#name}.

---

##### `roleGroup`<sup>Optional</sup> <a name="roleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup"></a>

```java
public java.lang.String getRoleGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#role_group DataPagerdutyLicenses#role_group}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#self DataPagerdutyLicenses#self}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#summary DataPagerdutyLicenses#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#type DataPagerdutyLicenses#type}.

---

##### `validRoles`<sup>Optional</sup> <a name="validRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles"></a>

```java
public java.util.List<java.lang.String> getValidRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/data-sources/licenses#valid_roles DataPagerdutyLicenses#valid_roles}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyLicensesLicensesList <a name="DataPagerdutyLicensesLicensesList" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicensesLicensesList;

new DataPagerdutyLicensesLicensesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get"></a>

```java
public DataPagerdutyLicensesLicensesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>>

---


### DataPagerdutyLicensesLicensesOutputReference <a name="DataPagerdutyLicensesLicensesOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_licenses.DataPagerdutyLicensesLicensesOutputReference;

new DataPagerdutyLicensesLicensesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable">resetAllocationsAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue">resetCurrentValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl">resetHtmlUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup">resetRoleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles">resetValidRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationsAvailable` <a name="resetAllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable"></a>

```java
public void resetAllocationsAvailable()
```

##### `resetCurrentValue` <a name="resetCurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue"></a>

```java
public void resetCurrentValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHtmlUrl` <a name="resetHtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl"></a>

```java
public void resetHtmlUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRoleGroup` <a name="resetRoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup"></a>

```java
public void resetRoleGroup()
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute"></a>

```java
public void resetSelfAttribute()
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary"></a>

```java
public void resetSummary()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValidRoles` <a name="resetValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles"></a>

```java
public void resetValidRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput">allocationsAvailableInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput">currentValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput">htmlUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput">roleGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput">validRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable">allocationsAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue">currentValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup">roleGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles">validRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationsAvailableInput`<sup>Optional</sup> <a name="allocationsAvailableInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput"></a>

```java
public java.lang.Number getAllocationsAvailableInput();
```

- *Type:* java.lang.Number

---

##### `currentValueInput`<sup>Optional</sup> <a name="currentValueInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput"></a>

```java
public java.lang.Number getCurrentValueInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `htmlUrlInput`<sup>Optional</sup> <a name="htmlUrlInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput"></a>

```java
public java.lang.String getHtmlUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleGroupInput`<sup>Optional</sup> <a name="roleGroupInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput"></a>

```java
public java.lang.String getRoleGroupInput();
```

- *Type:* java.lang.String

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput"></a>

```java
public java.lang.String getSelfAttributeInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validRolesInput`<sup>Optional</sup> <a name="validRolesInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput"></a>

```java
public java.util.List<java.lang.String> getValidRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocationsAvailable`<sup>Required</sup> <a name="allocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable"></a>

```java
public java.lang.Number getAllocationsAvailable();
```

- *Type:* java.lang.Number

---

##### `currentValue`<sup>Required</sup> <a name="currentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue"></a>

```java
public java.lang.Number getCurrentValue();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleGroup`<sup>Required</sup> <a name="roleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup"></a>

```java
public java.lang.String getRoleGroup();
```

- *Type:* java.lang.String

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validRoles`<sup>Required</sup> <a name="validRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles"></a>

```java
public java.util.List<java.lang.String> getValidRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a> OR com.hashicorp.cdktf.IResolvable

---



