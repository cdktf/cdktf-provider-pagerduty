# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-pagerduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagerdutyProvider <a name="PagerdutyProvider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs pagerduty}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProvider;

PagerdutyProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .apiUrlOverride(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .skipCredentialsValidation(java.lang.Boolean)
//  .skipCredentialsValidation(IResolvable)
//  .token(java.lang.String)
//  .useAppOauthScopedToken(PagerdutyProviderUseAppOauthScopedToken)
//  .userToken(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.apiUrlOverride">apiUrlOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.useAppOauthScopedToken">useAppOauthScopedToken</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.userToken">userToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#user_token PagerdutyProvider#user_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#alias PagerdutyProvider#alias}

---

##### `apiUrlOverride`<sup>Optional</sup> <a name="apiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.apiUrlOverride"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.serviceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#service_region PagerdutyProvider#service_region}.

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.skipCredentialsValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#token PagerdutyProvider#token}.

---

##### `useAppOauthScopedToken`<sup>Optional</sup> <a name="useAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.useAppOauthScopedToken"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `userToken`<sup>Optional</sup> <a name="userToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.userToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#user_token PagerdutyProvider#user_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride">resetApiUrlOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion">resetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation">resetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken">resetUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken">resetUserToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiUrlOverride` <a name="resetApiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride"></a>

```java
public void resetApiUrlOverride()
```

##### `resetServiceRegion` <a name="resetServiceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion"></a>

```java
public void resetServiceRegion()
```

##### `resetSkipCredentialsValidation` <a name="resetSkipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```java
public void resetSkipCredentialsValidation()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUseAppOauthScopedToken` <a name="resetUseAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken"></a>

```java
public void resetUseAppOauthScopedToken()
```

##### `resetUserToken` <a name="resetUserToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken"></a>

```java
public void resetUserToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PagerdutyProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProvider;

PagerdutyProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProvider;

PagerdutyProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProvider;

PagerdutyProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProvider;

PagerdutyProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PagerdutyProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PagerdutyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PagerdutyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PagerdutyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PagerdutyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput">apiUrlOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput">serviceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput">skipCredentialsValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput">useAppOauthScopedTokenInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput">userTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride">apiUrlOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken">useAppOauthScopedToken</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken">userToken</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiUrlOverrideInput`<sup>Optional</sup> <a name="apiUrlOverrideInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput"></a>

```java
public java.lang.String getApiUrlOverrideInput();
```

- *Type:* java.lang.String

---

##### `serviceRegionInput`<sup>Optional</sup> <a name="serviceRegionInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput"></a>

```java
public java.lang.String getServiceRegionInput();
```

- *Type:* java.lang.String

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="skipCredentialsValidationInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```java
public java.lang.Object getSkipCredentialsValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `useAppOauthScopedTokenInput`<sup>Optional</sup> <a name="useAppOauthScopedTokenInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput"></a>

```java
public PagerdutyProviderUseAppOauthScopedToken getUseAppOauthScopedTokenInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `userTokenInput`<sup>Optional</sup> <a name="userTokenInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput"></a>

```java
public java.lang.String getUserTokenInput();
```

- *Type:* java.lang.String

---

##### `apiUrlOverride`<sup>Optional</sup> <a name="apiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride"></a>

```java
public java.lang.String getApiUrlOverride();
```

- *Type:* java.lang.String

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation"></a>

```java
public java.lang.Object getSkipCredentialsValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `useAppOauthScopedToken`<sup>Optional</sup> <a name="useAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken"></a>

```java
public PagerdutyProviderUseAppOauthScopedToken getUseAppOauthScopedToken();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `userToken`<sup>Optional</sup> <a name="userToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken"></a>

```java
public java.lang.String getUserToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PagerdutyProviderConfig <a name="PagerdutyProviderConfig" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProviderConfig;

PagerdutyProviderConfig.builder()
//  .alias(java.lang.String)
//  .apiUrlOverride(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .skipCredentialsValidation(java.lang.Boolean)
//  .skipCredentialsValidation(IResolvable)
//  .token(java.lang.String)
//  .useAppOauthScopedToken(PagerdutyProviderUseAppOauthScopedToken)
//  .userToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride">apiUrlOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken">useAppOauthScopedToken</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken">userToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#user_token PagerdutyProvider#user_token}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#alias PagerdutyProvider#alias}

---

##### `apiUrlOverride`<sup>Optional</sup> <a name="apiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride"></a>

```java
public java.lang.String getApiUrlOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#service_region PagerdutyProvider#service_region}.

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```java
public java.lang.Object getSkipCredentialsValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#token PagerdutyProvider#token}.

---

##### `useAppOauthScopedToken`<sup>Optional</sup> <a name="useAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken"></a>

```java
public PagerdutyProviderUseAppOauthScopedToken getUseAppOauthScopedToken();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `userToken`<sup>Optional</sup> <a name="userToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken"></a>

```java
public java.lang.String getUserToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#user_token PagerdutyProvider#user_token}.

---

### PagerdutyProviderUseAppOauthScopedToken <a name="PagerdutyProviderUseAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken;

PagerdutyProviderUseAppOauthScopedToken.builder()
    .pdClientId(java.lang.String)
    .pdClientSecret(java.lang.String)
    .pdSubdomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId">pdClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_client_id PagerdutyProvider#pd_client_id}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret">pdClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain">pdSubdomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}. |

---

##### `pdClientId`<sup>Required</sup> <a name="pdClientId" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId"></a>

```java
public java.lang.String getPdClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_client_id PagerdutyProvider#pd_client_id}.

---

##### `pdClientSecret`<sup>Required</sup> <a name="pdClientSecret" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret"></a>

```java
public java.lang.String getPdClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}.

---

##### `pdSubdomain`<sup>Required</sup> <a name="pdSubdomain" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain"></a>

```java
public java.lang.String getPdSubdomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}.

---



