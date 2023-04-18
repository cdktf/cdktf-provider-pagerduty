# `pagerduty_maintenance_window`

Refer to the Terraform Registory for docs: [`pagerduty_maintenance_window`](https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window).

# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktf/provider-pagerduty.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window pagerduty_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import maintenance_window

maintenanceWindow.MaintenanceWindow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  services: typing.List[str],
  start_time: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#end_time MaintenanceWindow#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#services MaintenanceWindow#services}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#start_time MaintenanceWindow#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#description MaintenanceWindow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#id MaintenanceWindow#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#end_time MaintenanceWindow#end_time}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.services"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#services MaintenanceWindow#services}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#start_time MaintenanceWindow#start_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#description MaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import maintenance_window

maintenanceWindow.MaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import maintenance_window

maintenanceWindow.MaintenanceWindowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  services: typing.List[str],
  start_time: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#end_time MaintenanceWindow#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#services MaintenanceWindow#services}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#start_time MaintenanceWindow#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#description MaintenanceWindow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#id MaintenanceWindow#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#end_time MaintenanceWindow#end_time}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#services MaintenanceWindow#services}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#start_time MaintenanceWindow#start_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#description MaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



