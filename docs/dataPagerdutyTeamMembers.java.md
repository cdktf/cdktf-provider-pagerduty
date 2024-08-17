# `dataPagerdutyTeamMembers` Submodule <a name="`dataPagerdutyTeamMembers` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyTeamMembers <a name="DataPagerdutyTeamMembers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members pagerduty_team_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembers;

DataPagerdutyTeamMembers.Builder.create(Construct scope, java.lang.String id)
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
    .teamId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The ID of the team to find via the PagerDuty API. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The ID of the team to find via the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#team_id DataPagerdutyTeamMembers#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyTeamMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembers;

DataPagerdutyTeamMembers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembers;

DataPagerdutyTeamMembers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembers;

DataPagerdutyTeamMembers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembers;

DataPagerdutyTeamMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataPagerdutyTeamMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataPagerdutyTeamMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataPagerdutyTeamMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataPagerdutyTeamMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyTeamMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.members">members</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList">DataPagerdutyTeamMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.members"></a>

```java
public DataPagerdutyTeamMembersMembersList getMembers();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList">DataPagerdutyTeamMembersMembersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyTeamMembersConfig <a name="DataPagerdutyTeamMembersConfig" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembersConfig;

DataPagerdutyTeamMembersConfig.builder()
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
    .teamId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The ID of the team to find via the PagerDuty API. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The ID of the team to find via the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#team_id DataPagerdutyTeamMembers#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataPagerdutyTeamMembersMembers <a name="DataPagerdutyTeamMembersMembers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembersMembers;

DataPagerdutyTeamMembersMembers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyTeamMembersMembersList <a name="DataPagerdutyTeamMembersMembersList" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembersMembersList;

new DataPagerdutyTeamMembersMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get"></a>

```java
public DataPagerdutyTeamMembersMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataPagerdutyTeamMembersMembersOutputReference <a name="DataPagerdutyTeamMembersMembersOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.data_pagerduty_team_members.DataPagerdutyTeamMembersMembersOutputReference;

new DataPagerdutyTeamMembersMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers">DataPagerdutyTeamMembersMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.internalValue"></a>

```java
public DataPagerdutyTeamMembersMembers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers">DataPagerdutyTeamMembersMembers</a>

---



