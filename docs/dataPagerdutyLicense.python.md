# `dataPagerdutyLicense` Submodule <a name="`dataPagerdutyLicense` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicense <a name="DataPagerdutyLicense" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/license pagerduty_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_license

dataPagerdutyLicense.DataPagerdutyLicense(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allocations_available: typing.Union[int, float] = None,
  current_value: typing.Union[int, float] = None,
  description: str = None,
  html_url: str = None,
  id: str = None,
  name: str = None,
  role_group: str = None,
  self_attribute: str = None,
  summary: str = None,
  type: str = None,
  valid_roles: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.allocationsAvailable">allocations_available</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#allocations_available DataPagerdutyLicense#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.currentValue">current_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#current_value DataPagerdutyLicense#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#description DataPagerdutyLicense#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.htmlUrl">html_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#html_url DataPagerdutyLicense#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#id DataPagerdutyLicense#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#name DataPagerdutyLicense#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.roleGroup">role_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#role_group DataPagerdutyLicense#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.selfAttribute">self_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#self DataPagerdutyLicense#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#summary DataPagerdutyLicense#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#type DataPagerdutyLicense#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.validRoles">valid_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#valid_roles DataPagerdutyLicense#valid_roles}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocations_available`<sup>Optional</sup> <a name="allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.allocationsAvailable"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#allocations_available DataPagerdutyLicense#allocations_available}.

---

##### `current_value`<sup>Optional</sup> <a name="current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.currentValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#current_value DataPagerdutyLicense#current_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#description DataPagerdutyLicense#description}.

---

##### `html_url`<sup>Optional</sup> <a name="html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.htmlUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#html_url DataPagerdutyLicense#html_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#id DataPagerdutyLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#name DataPagerdutyLicense#name}.

---

##### `role_group`<sup>Optional</sup> <a name="role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.roleGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#role_group DataPagerdutyLicense#role_group}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.selfAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#self DataPagerdutyLicense#self}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.summary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#summary DataPagerdutyLicense#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#type DataPagerdutyLicense#type}.

---

##### `valid_roles`<sup>Optional</sup> <a name="valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.validRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#valid_roles DataPagerdutyLicense#valid_roles}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetAllocationsAvailable">reset_allocations_available</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetCurrentValue">reset_current_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetHtmlUrl">reset_html_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetRoleGroup">reset_role_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetValidRoles">reset_valid_roles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allocations_available` <a name="reset_allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetAllocationsAvailable"></a>

```python
def reset_allocations_available() -> None
```

##### `reset_current_value` <a name="reset_current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetCurrentValue"></a>

```python
def reset_current_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_html_url` <a name="reset_html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetHtmlUrl"></a>

```python
def reset_html_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_group` <a name="reset_role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetRoleGroup"></a>

```python
def reset_role_group() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_valid_roles` <a name="reset_valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetValidRoles"></a>

```python
def reset_valid_roles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_license

dataPagerdutyLicense.DataPagerdutyLicense.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_license

dataPagerdutyLicense.DataPagerdutyLicense.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_license

dataPagerdutyLicense.DataPagerdutyLicense.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailableInput">allocations_available_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValueInput">current_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrlInput">html_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroupInput">role_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttributeInput">self_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRolesInput">valid_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable">allocations_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue">current_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup">role_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles">valid_roles</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allocations_available_input`<sup>Optional</sup> <a name="allocations_available_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailableInput"></a>

```python
allocations_available_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_value_input`<sup>Optional</sup> <a name="current_value_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValueInput"></a>

```python
current_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `html_url_input`<sup>Optional</sup> <a name="html_url_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrlInput"></a>

```python
html_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_group_input`<sup>Optional</sup> <a name="role_group_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroupInput"></a>

```python
role_group_input: str
```

- *Type:* str

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttributeInput"></a>

```python
self_attribute_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `valid_roles_input`<sup>Optional</sup> <a name="valid_roles_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRolesInput"></a>

```python
valid_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocations_available`<sup>Required</sup> <a name="allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable"></a>

```python
allocations_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_value`<sup>Required</sup> <a name="current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue"></a>

```python
current_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_group`<sup>Required</sup> <a name="role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup"></a>

```python
role_group: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `valid_roles`<sup>Required</sup> <a name="valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles"></a>

```python
valid_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicenseConfig <a name="DataPagerdutyLicenseConfig" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_license

dataPagerdutyLicense.DataPagerdutyLicenseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allocations_available: typing.Union[int, float] = None,
  current_value: typing.Union[int, float] = None,
  description: str = None,
  html_url: str = None,
  id: str = None,
  name: str = None,
  role_group: str = None,
  self_attribute: str = None,
  summary: str = None,
  type: str = None,
  valid_roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.allocationsAvailable">allocations_available</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#allocations_available DataPagerdutyLicense#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.currentValue">current_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#current_value DataPagerdutyLicense#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#description DataPagerdutyLicense#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.htmlUrl">html_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#html_url DataPagerdutyLicense#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#id DataPagerdutyLicense#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#name DataPagerdutyLicense#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.roleGroup">role_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#role_group DataPagerdutyLicense#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.selfAttribute">self_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#self DataPagerdutyLicense#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#summary DataPagerdutyLicense#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#type DataPagerdutyLicense#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.validRoles">valid_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#valid_roles DataPagerdutyLicense#valid_roles}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocations_available`<sup>Optional</sup> <a name="allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.allocationsAvailable"></a>

```python
allocations_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#allocations_available DataPagerdutyLicense#allocations_available}.

---

##### `current_value`<sup>Optional</sup> <a name="current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.currentValue"></a>

```python
current_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#current_value DataPagerdutyLicense#current_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#description DataPagerdutyLicense#description}.

---

##### `html_url`<sup>Optional</sup> <a name="html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#html_url DataPagerdutyLicense#html_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#id DataPagerdutyLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#name DataPagerdutyLicense#name}.

---

##### `role_group`<sup>Optional</sup> <a name="role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.roleGroup"></a>

```python
role_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#role_group DataPagerdutyLicense#role_group}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#self DataPagerdutyLicense#self}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#summary DataPagerdutyLicense#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#type DataPagerdutyLicense#type}.

---

##### `valid_roles`<sup>Optional</sup> <a name="valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.validRoles"></a>

```python
valid_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/license#valid_roles DataPagerdutyLicense#valid_roles}.

---



