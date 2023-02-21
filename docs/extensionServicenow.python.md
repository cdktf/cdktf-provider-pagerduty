# `extensionServicenow` Submodule <a name="`extensionServicenow` Submodule" id="@cdktf/provider-pagerduty.extensionServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtensionServicenow <a name="ExtensionServicenow" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow pagerduty_extension_servicenow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import extension_servicenow

extensionServicenow.ExtensionServicenow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_objects: typing.List[str],
  extension_schema: str,
  referer: str,
  snow_password: str,
  snow_user: str,
  sync_options: str,
  target: str,
  task_type: str,
  endpoint_url: str = None,
  id: str = None,
  name: str = None,
  summary: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionObjects">extension_objects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionSchema">extension_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.referer">referer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowPassword">snow_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowUser">snow_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.syncOptions">sync_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.endpointUrl">endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#id ExtensionServicenow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_objects`<sup>Required</sup> <a name="extension_objects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionObjects"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extension_schema`<sup>Required</sup> <a name="extension_schema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.referer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `snow_password`<sup>Required</sup> <a name="snow_password" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `snow_user`<sup>Required</sup> <a name="snow_user" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `sync_options`<sup>Required</sup> <a name="sync_options" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.syncOptions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#target ExtensionServicenow#target}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.taskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `endpoint_url`<sup>Optional</sup> <a name="endpoint_url" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.endpointUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#id ExtensionServicenow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#name ExtensionServicenow#name}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.summary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#type ExtensionServicenow#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl">reset_endpoint_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_endpoint_url` <a name="reset_endpoint_url" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl"></a>

```python
def reset_endpoint_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import extension_servicenow

extensionServicenow.ExtensionServicenow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import extension_servicenow

extensionServicenow.ExtensionServicenow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import extension_servicenow

extensionServicenow.ExtensionServicenow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput">endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput">extension_objects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput">extension_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput">referer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput">snow_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput">snow_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput">sync_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects">extension_objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema">extension_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer">referer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword">snow_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser">snow_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions">sync_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `endpoint_url_input`<sup>Optional</sup> <a name="endpoint_url_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput"></a>

```python
endpoint_url_input: str
```

- *Type:* str

---

##### `extension_objects_input`<sup>Optional</sup> <a name="extension_objects_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput"></a>

```python
extension_objects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extension_schema_input`<sup>Optional</sup> <a name="extension_schema_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput"></a>

```python
extension_schema_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `referer_input`<sup>Optional</sup> <a name="referer_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput"></a>

```python
referer_input: str
```

- *Type:* str

---

##### `snow_password_input`<sup>Optional</sup> <a name="snow_password_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput"></a>

```python
snow_password_input: str
```

- *Type:* str

---

##### `snow_user_input`<sup>Optional</sup> <a name="snow_user_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput"></a>

```python
snow_user_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `sync_options_input`<sup>Optional</sup> <a name="sync_options_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput"></a>

```python
sync_options_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `extension_objects`<sup>Required</sup> <a name="extension_objects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects"></a>

```python
extension_objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extension_schema`<sup>Required</sup> <a name="extension_schema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema"></a>

```python
extension_schema: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer"></a>

```python
referer: str
```

- *Type:* str

---

##### `snow_password`<sup>Required</sup> <a name="snow_password" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword"></a>

```python
snow_password: str
```

- *Type:* str

---

##### `snow_user`<sup>Required</sup> <a name="snow_user" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser"></a>

```python
snow_user: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `sync_options`<sup>Required</sup> <a name="sync_options" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions"></a>

```python
sync_options: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExtensionServicenowConfig <a name="ExtensionServicenowConfig" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import extension_servicenow

extensionServicenow.ExtensionServicenowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_objects: typing.List[str],
  extension_schema: str,
  referer: str,
  snow_password: str,
  snow_user: str,
  sync_options: str,
  target: str,
  task_type: str,
  endpoint_url: str = None,
  id: str = None,
  name: str = None,
  summary: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects">extension_objects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema">extension_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer">referer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword">snow_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser">snow_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions">sync_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#id ExtensionServicenow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_objects`<sup>Required</sup> <a name="extension_objects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects"></a>

```python
extension_objects: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extension_schema`<sup>Required</sup> <a name="extension_schema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema"></a>

```python
extension_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer"></a>

```python
referer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `snow_password`<sup>Required</sup> <a name="snow_password" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword"></a>

```python
snow_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `snow_user`<sup>Required</sup> <a name="snow_user" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser"></a>

```python
snow_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `sync_options`<sup>Required</sup> <a name="sync_options" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions"></a>

```python
sync_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#target ExtensionServicenow#target}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `endpoint_url`<sup>Optional</sup> <a name="endpoint_url" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#id ExtensionServicenow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#name ExtensionServicenow#name}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow#type ExtensionServicenow#type}.

---



