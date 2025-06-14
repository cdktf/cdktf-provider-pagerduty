# `dataPagerdutyJiraCloudAccountMapping` Submodule <a name="`dataPagerdutyJiraCloudAccountMapping` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyJiraCloudAccountMapping <a name="DataPagerdutyJiraCloudAccountMapping" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping pagerduty_jira_cloud_account_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subdomain: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.subdomain">subdomain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.subdomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyJiraCloudAccountMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyJiraCloudAccountMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyJiraCloudAccountMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyJiraCloudAccountMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyJiraCloudAccountMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomainInput">subdomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subdomain_input`<sup>Optional</sup> <a name="subdomain_input" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomainInput"></a>

```python
subdomain_input: str
```

- *Type:* str

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyJiraCloudAccountMappingConfig <a name="DataPagerdutyJiraCloudAccountMappingConfig" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_jira_cloud_account_mapping

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subdomain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.subdomain">subdomain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.1/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}.

---



