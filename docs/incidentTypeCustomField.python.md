# `incidentTypeCustomField` Submodule <a name="`incidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.incidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentTypeCustomField <a name="IncidentTypeCustomField" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomField(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_type: str,
  display_name: str,
  incident_type: str,
  name: str,
  default_value: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  field_options: typing.List[str] = None,
  field_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.fieldOptions">field_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.fieldType">field_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.dataType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}.

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.incidentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.defaultValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}.

---

##### `field_options`<sup>Optional</sup> <a name="field_options" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.fieldOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}.

---

##### `field_type`<sup>Optional</sup> <a name="field_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.fieldType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions">reset_field_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType">reset_field_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_field_options` <a name="reset_field_options" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions"></a>

```python
def reset_field_options() -> None
```

##### `reset_field_type` <a name="reset_field_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType"></a>

```python
def reset_field_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentTypeCustomField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput">field_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput">field_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions">field_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_options_input`<sup>Optional</sup> <a name="field_options_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput"></a>

```python
field_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_type_input`<sup>Optional</sup> <a name="field_type_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput"></a>

```python
field_type_input: str
```

- *Type:* str

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_options`<sup>Required</sup> <a name="field_options" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions"></a>

```python
field_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeCustomFieldConfig <a name="IncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_type_custom_field

incidentTypeCustomField.IncidentTypeCustomFieldConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_type: str,
  display_name: str,
  incident_type: str,
  name: str,
  default_value: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  field_options: typing.List[str] = None,
  field_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType">incident_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions">field_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType">field_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}.

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}.

---

##### `field_options`<sup>Optional</sup> <a name="field_options" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions"></a>

```python
field_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}.

---

##### `field_type`<sup>Optional</sup> <a name="field_type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}.

---



