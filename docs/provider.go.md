# `provider`

Refer to the Terraform Registory for docs: [`pagerduty`](https://www.terraform.io/docs/providers/pagerduty).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-pagerduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagerdutyProvider <a name="PagerdutyProvider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty pagerduty}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v6/provider"

provider.NewPagerdutyProvider(scope Construct, id *string, config PagerdutyProviderConfig) PagerdutyProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride">ResetApiUrlOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion">ResetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation">ResetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken">ResetUserToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiUrlOverride` <a name="ResetApiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride"></a>

```go
func ResetApiUrlOverride()
```

##### `ResetServiceRegion` <a name="ResetServiceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion"></a>

```go
func ResetServiceRegion()
```

##### `ResetSkipCredentialsValidation` <a name="ResetSkipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```go
func ResetSkipCredentialsValidation()
```

##### `ResetUserToken` <a name="ResetUserToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken"></a>

```go
func ResetUserToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v6/provider"

provider.PagerdutyProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v6/provider"

provider.PagerdutyProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v6/provider"

provider.PagerdutyProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput">ApiUrlOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput">ServiceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput">SkipCredentialsValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput">UserTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride">ApiUrlOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken">UserToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiUrlOverrideInput`<sup>Optional</sup> <a name="ApiUrlOverrideInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput"></a>

```go
func ApiUrlOverrideInput() *string
```

- *Type:* *string

---

##### `ServiceRegionInput`<sup>Optional</sup> <a name="ServiceRegionInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput"></a>

```go
func ServiceRegionInput() *string
```

- *Type:* *string

---

##### `SkipCredentialsValidationInput`<sup>Optional</sup> <a name="SkipCredentialsValidationInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```go
func SkipCredentialsValidationInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UserTokenInput`<sup>Optional</sup> <a name="UserTokenInput" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput"></a>

```go
func UserTokenInput() *string
```

- *Type:* *string

---

##### `ApiUrlOverride`<sup>Optional</sup> <a name="ApiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride"></a>

```go
func ApiUrlOverride() *string
```

- *Type:* *string

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion"></a>

```go
func ServiceRegion() *string
```

- *Type:* *string

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation"></a>

```go
func SkipCredentialsValidation() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UserToken`<sup>Optional</sup> <a name="UserToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken"></a>

```go
func UserToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PagerdutyProviderConfig <a name="PagerdutyProviderConfig" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v6/provider"

&provider.PagerdutyProviderConfig {
	Token: *string,
	Alias: *string,
	ApiUrlOverride: *string,
	ServiceRegion: *string,
	SkipCredentialsValidation: interface{},
	UserToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#token PagerdutyProvider#token}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride">ApiUrlOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken">UserToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#user_token PagerdutyProvider#user_token}. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#token PagerdutyProvider#token}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#alias PagerdutyProvider#alias}

---

##### `ApiUrlOverride`<sup>Optional</sup> <a name="ApiUrlOverride" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride"></a>

```go
ApiUrlOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#api_url_override PagerdutyProvider#api_url_override}.

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion"></a>

```go
ServiceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#service_region PagerdutyProvider#service_region}.

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```go
SkipCredentialsValidation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `UserToken`<sup>Optional</sup> <a name="UserToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken"></a>

```go
UserToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#user_token PagerdutyProvider#user_token}.

---



