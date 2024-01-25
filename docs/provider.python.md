# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-pagerduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagerdutyProvider <a name="PagerdutyProvider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs pagerduty}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_url_override: str = None,
  service_region: str = None,
  skip_credentials_validation: typing.Union[bool, IResolvable] = None,
  token: str = None,
  use_app_oauth_scoped_token: PagerdutyProviderUseAppOauthScopedToken = None,
  user_token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.apiUrlOverride">api_url_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.serviceRegion">service_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.useAppOauthScopedToken">use_app_oauth_scoped_token</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.userToken">user_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#user_token PagerdutyProvider#user_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#alias PagerdutyProvider#alias}

---

##### `api_url_override`<sup>Optional</sup> <a name="api_url_override" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.apiUrlOverride"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.serviceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#service_region PagerdutyProvider#service_region}.

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.skipCredentialsValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#token PagerdutyProvider#token}.

---

##### `use_app_oauth_scoped_token`<sup>Optional</sup> <a name="use_app_oauth_scoped_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.useAppOauthScopedToken"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `user_token`<sup>Optional</sup> <a name="user_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.userToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#user_token PagerdutyProvider#user_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride">reset_api_url_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion">reset_service_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation">reset_skip_credentials_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken">reset_use_app_oauth_scoped_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken">reset_user_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_url_override` <a name="reset_api_url_override" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride"></a>

```python
def reset_api_url_override() -> None
```

##### `reset_service_region` <a name="reset_service_region" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion"></a>

```python
def reset_service_region() -> None
```

##### `reset_skip_credentials_validation` <a name="reset_skip_credentials_validation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```python
def reset_skip_credentials_validation() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_use_app_oauth_scoped_token` <a name="reset_use_app_oauth_scoped_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken"></a>

```python
def reset_use_app_oauth_scoped_token() -> None
```

##### `reset_user_token` <a name="reset_user_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.resetUserToken"></a>

```python
def reset_user_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PagerdutyProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PagerdutyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PagerdutyProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PagerdutyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PagerdutyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput">api_url_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput">service_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput">skip_credentials_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput">use_app_oauth_scoped_token_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput">user_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride">api_url_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion">service_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken">use_app_oauth_scoped_token</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken">user_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_url_override_input`<sup>Optional</sup> <a name="api_url_override_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput"></a>

```python
api_url_override_input: str
```

- *Type:* str

---

##### `service_region_input`<sup>Optional</sup> <a name="service_region_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput"></a>

```python
service_region_input: str
```

- *Type:* str

---

##### `skip_credentials_validation_input`<sup>Optional</sup> <a name="skip_credentials_validation_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```python
skip_credentials_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `use_app_oauth_scoped_token_input`<sup>Optional</sup> <a name="use_app_oauth_scoped_token_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput"></a>

```python
use_app_oauth_scoped_token_input: PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `user_token_input`<sup>Optional</sup> <a name="user_token_input" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput"></a>

```python
user_token_input: str
```

- *Type:* str

---

##### `api_url_override`<sup>Optional</sup> <a name="api_url_override" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride"></a>

```python
api_url_override: str
```

- *Type:* str

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation"></a>

```python
skip_credentials_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `use_app_oauth_scoped_token`<sup>Optional</sup> <a name="use_app_oauth_scoped_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken"></a>

```python
use_app_oauth_scoped_token: PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `user_token`<sup>Optional</sup> <a name="user_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.userToken"></a>

```python
user_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PagerdutyProviderConfig <a name="PagerdutyProviderConfig" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProviderConfig(
  alias: str = None,
  api_url_override: str = None,
  service_region: str = None,
  skip_credentials_validation: typing.Union[bool, IResolvable] = None,
  token: str = None,
  use_app_oauth_scoped_token: PagerdutyProviderUseAppOauthScopedToken = None,
  user_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride">api_url_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion">service_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken">use_app_oauth_scoped_token</a></code> | <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken">user_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#user_token PagerdutyProvider#user_token}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#alias PagerdutyProvider#alias}

---

##### `api_url_override`<sup>Optional</sup> <a name="api_url_override" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride"></a>

```python
api_url_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#service_region PagerdutyProvider#service_region}.

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```python
skip_credentials_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#token PagerdutyProvider#token}.

---

##### `use_app_oauth_scoped_token`<sup>Optional</sup> <a name="use_app_oauth_scoped_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken"></a>

```python
use_app_oauth_scoped_token: PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `user_token`<sup>Optional</sup> <a name="user_token" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken"></a>

```python
user_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#user_token PagerdutyProvider#user_token}.

---

### PagerdutyProviderUseAppOauthScopedToken <a name="PagerdutyProviderUseAppOauthScopedToken" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import provider

provider.PagerdutyProviderUseAppOauthScopedToken(
  pd_client_id: str,
  pd_client_secret: str,
  pd_subdomain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId">pd_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_client_id PagerdutyProvider#pd_client_id}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret">pd_client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}. |
| <code><a href="#@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain">pd_subdomain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}. |

---

##### `pd_client_id`<sup>Required</sup> <a name="pd_client_id" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId"></a>

```python
pd_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_client_id PagerdutyProvider#pd_client_id}.

---

##### `pd_client_secret`<sup>Required</sup> <a name="pd_client_secret" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret"></a>

```python
pd_client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}.

---

##### `pd_subdomain`<sup>Required</sup> <a name="pd_subdomain" id="@cdktf/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain"></a>

```python
pd_subdomain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}.

---



