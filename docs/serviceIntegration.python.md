# `serviceIntegration` Submodule <a name="`serviceIntegration` Submodule" id="@cdktf/provider-pagerduty.serviceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceIntegration <a name="ServiceIntegration" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration pagerduty_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  email_filter: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]] = None,
  email_filter_mode: str = None,
  email_incident_creation: str = None,
  email_parser: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]] = None,
  email_parsing_fallback: str = None,
  id: str = None,
  integration_email: str = None,
  integration_key: str = None,
  name: str = None,
  type: str = None,
  vendor: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilter">email_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]</code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilterMode">email_filter_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailIncidentCreation">email_incident_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParser">email_parser</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]</code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParsingFallback">email_parsing_fallback</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationEmail">integration_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `email_filter`<sup>Optional</sup> <a name="email_filter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `email_filter_mode`<sup>Optional</sup> <a name="email_filter_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailFilterMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `email_incident_creation`<sup>Optional</sup> <a name="email_incident_creation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailIncidentCreation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `email_parser`<sup>Optional</sup> <a name="email_parser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParser"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `email_parsing_fallback`<sup>Optional</sup> <a name="email_parsing_fallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.emailParsingFallback"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_email`<sup>Optional</sup> <a name="integration_email" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `integration_key`<sup>Optional</sup> <a name="integration_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.integrationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.vendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter">put_email_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser">put_email_parser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter">reset_email_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode">reset_email_filter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation">reset_email_incident_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser">reset_email_parser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback">reset_email_parsing_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail">reset_integration_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey">reset_integration_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor">reset_vendor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email_filter` <a name="put_email_filter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter"></a>

```python
def put_email_filter(
  value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]

---

##### `put_email_parser` <a name="put_email_parser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser"></a>

```python
def put_email_parser(
  value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]

---

##### `reset_email_filter` <a name="reset_email_filter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter"></a>

```python
def reset_email_filter() -> None
```

##### `reset_email_filter_mode` <a name="reset_email_filter_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode"></a>

```python
def reset_email_filter_mode() -> None
```

##### `reset_email_incident_creation` <a name="reset_email_incident_creation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation"></a>

```python
def reset_email_incident_creation() -> None
```

##### `reset_email_parser` <a name="reset_email_parser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser"></a>

```python
def reset_email_parser() -> None
```

##### `reset_email_parsing_fallback` <a name="reset_email_parsing_fallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback"></a>

```python
def reset_email_parsing_fallback() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_email` <a name="reset_integration_email" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail"></a>

```python
def reset_integration_email() -> None
```

##### `reset_integration_key` <a name="reset_integration_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey"></a>

```python
def reset_integration_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vendor` <a name="reset_vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor"></a>

```python
def reset_vendor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter">email_filter</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser">email_parser</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput">email_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput">email_filter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput">email_incident_creation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput">email_parser_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput">email_parsing_fallback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput">integration_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput">vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode">email_filter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation">email_incident_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback">email_parsing_fallback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail">integration_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_filter`<sup>Required</sup> <a name="email_filter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter"></a>

```python
email_filter: ServiceIntegrationEmailFilterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a>

---

##### `email_parser`<sup>Required</sup> <a name="email_parser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser"></a>

```python
email_parser: ServiceIntegrationEmailParserList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a>

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `email_filter_input`<sup>Optional</sup> <a name="email_filter_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput"></a>

```python
email_filter_input: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]

---

##### `email_filter_mode_input`<sup>Optional</sup> <a name="email_filter_mode_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput"></a>

```python
email_filter_mode_input: str
```

- *Type:* str

---

##### `email_incident_creation_input`<sup>Optional</sup> <a name="email_incident_creation_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput"></a>

```python
email_incident_creation_input: str
```

- *Type:* str

---

##### `email_parser_input`<sup>Optional</sup> <a name="email_parser_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput"></a>

```python
email_parser_input: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]

---

##### `email_parsing_fallback_input`<sup>Optional</sup> <a name="email_parsing_fallback_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput"></a>

```python
email_parsing_fallback_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_email_input`<sup>Optional</sup> <a name="integration_email_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput"></a>

```python
integration_email_input: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vendor_input`<sup>Optional</sup> <a name="vendor_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput"></a>

```python
vendor_input: str
```

- *Type:* str

---

##### `email_filter_mode`<sup>Required</sup> <a name="email_filter_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode"></a>

```python
email_filter_mode: str
```

- *Type:* str

---

##### `email_incident_creation`<sup>Required</sup> <a name="email_incident_creation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation"></a>

```python
email_incident_creation: str
```

- *Type:* str

---

##### `email_parsing_fallback`<sup>Required</sup> <a name="email_parsing_fallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback"></a>

```python
email_parsing_fallback: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_email`<sup>Required</sup> <a name="integration_email" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail"></a>

```python
integration_email: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceIntegrationConfig <a name="ServiceIntegrationConfig" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  email_filter: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]] = None,
  email_filter_mode: str = None,
  email_incident_creation: str = None,
  email_parser: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]] = None,
  email_parsing_fallback: str = None,
  id: str = None,
  integration_email: str = None,
  integration_key: str = None,
  name: str = None,
  type: str = None,
  vendor: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter">email_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]</code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode">email_filter_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation">email_incident_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser">email_parser</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]</code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback">email_parsing_fallback</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail">integration_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `email_filter`<sup>Optional</sup> <a name="email_filter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter"></a>

```python
email_filter: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `email_filter_mode`<sup>Optional</sup> <a name="email_filter_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode"></a>

```python
email_filter_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `email_incident_creation`<sup>Optional</sup> <a name="email_incident_creation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation"></a>

```python
email_incident_creation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `email_parser`<sup>Optional</sup> <a name="email_parser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser"></a>

```python
email_parser: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `email_parsing_fallback`<sup>Optional</sup> <a name="email_parsing_fallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback"></a>

```python
email_parsing_fallback: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_email`<sup>Optional</sup> <a name="integration_email" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail"></a>

```python
integration_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `integration_key`<sup>Optional</sup> <a name="integration_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

### ServiceIntegrationEmailFilter <a name="ServiceIntegrationEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailFilter(
  body_mode: str = None,
  body_regex: str = None,
  from_email_mode: str = None,
  from_email_regex: str = None,
  subject_mode: str = None,
  subject_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode">body_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex">body_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode">from_email_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex">from_email_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode">subject_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex">subject_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}. |

---

##### `body_mode`<sup>Optional</sup> <a name="body_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode"></a>

```python
body_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}.

---

##### `body_regex`<sup>Optional</sup> <a name="body_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex"></a>

```python
body_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}.

---

##### `from_email_mode`<sup>Optional</sup> <a name="from_email_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode"></a>

```python
from_email_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}.

---

##### `from_email_regex`<sup>Optional</sup> <a name="from_email_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex"></a>

```python
from_email_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}.

---

##### `subject_mode`<sup>Optional</sup> <a name="subject_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode"></a>

```python
subject_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}.

---

##### `subject_regex`<sup>Optional</sup> <a name="subject_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex"></a>

```python
subject_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}.

---

### ServiceIntegrationEmailParser <a name="ServiceIntegrationEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParser(
  action: str,
  match_predicate: ServiceIntegrationEmailParserMatchPredicate,
  value_extractor: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserValueExtractor]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#action ServiceIntegration#action}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate">match_predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | match_predicate block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor">value_extractor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]</code> | value_extractor block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#action ServiceIntegration#action}.

---

##### `match_predicate`<sup>Required</sup> <a name="match_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate"></a>

```python
match_predicate: ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

match_predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#match_predicate ServiceIntegration#match_predicate}

---

##### `value_extractor`<sup>Optional</sup> <a name="value_extractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor"></a>

```python
value_extractor: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserValueExtractor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]

value_extractor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#value_extractor ServiceIntegration#value_extractor}

---

### ServiceIntegrationEmailParserMatchPredicate <a name="ServiceIntegrationEmailParserMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicate(
  type: str,
  predicate: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate">predicate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]</code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate"></a>

```python
predicate: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate(
  type: str,
  matcher: str = None,
  part: str = None,
  predicate: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher">matcher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part">part</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate">predicate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]</code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part"></a>

```python
part: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate"></a>

```python
predicate: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate(
  matcher: str,
  part: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher">matcher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part">part</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part"></a>

```python
part: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

### ServiceIntegrationEmailParserValueExtractor <a name="ServiceIntegrationEmailParserValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserValueExtractor(
  part: str,
  type: str,
  value_name: str,
  ends_before: str = None,
  regex: str = None,
  starts_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part">part</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName">value_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#value_name ServiceIntegration#value_name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore">ends_before</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#regex ServiceIntegration#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter">starts_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}. |

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part"></a>

```python
part: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `value_name`<sup>Required</sup> <a name="value_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName"></a>

```python
value_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#value_name ServiceIntegration#value_name}.

---

##### `ends_before`<sup>Optional</sup> <a name="ends_before" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore"></a>

```python
ends_before: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#regex ServiceIntegration#regex}.

---

##### `starts_after`<sup>Optional</sup> <a name="starts_after" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter"></a>

```python
starts_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceIntegrationEmailFilterList <a name="ServiceIntegrationEmailFilterList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceIntegrationEmailFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]]

---


### ServiceIntegrationEmailFilterOutputReference <a name="ServiceIntegrationEmailFilterOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode">reset_body_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex">reset_body_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode">reset_from_email_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex">reset_from_email_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode">reset_subject_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex">reset_subject_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_body_mode` <a name="reset_body_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode"></a>

```python
def reset_body_mode() -> None
```

##### `reset_body_regex` <a name="reset_body_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex"></a>

```python
def reset_body_regex() -> None
```

##### `reset_from_email_mode` <a name="reset_from_email_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode"></a>

```python
def reset_from_email_mode() -> None
```

##### `reset_from_email_regex` <a name="reset_from_email_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex"></a>

```python
def reset_from_email_regex() -> None
```

##### `reset_subject_mode` <a name="reset_subject_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode"></a>

```python
def reset_subject_mode() -> None
```

##### `reset_subject_regex` <a name="reset_subject_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex"></a>

```python
def reset_subject_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput">body_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput">body_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput">from_email_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput">from_email_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput">subject_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput">subject_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode">body_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex">body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode">from_email_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex">from_email_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode">subject_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex">subject_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `body_mode_input`<sup>Optional</sup> <a name="body_mode_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput"></a>

```python
body_mode_input: str
```

- *Type:* str

---

##### `body_regex_input`<sup>Optional</sup> <a name="body_regex_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput"></a>

```python
body_regex_input: str
```

- *Type:* str

---

##### `from_email_mode_input`<sup>Optional</sup> <a name="from_email_mode_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput"></a>

```python
from_email_mode_input: str
```

- *Type:* str

---

##### `from_email_regex_input`<sup>Optional</sup> <a name="from_email_regex_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput"></a>

```python
from_email_regex_input: str
```

- *Type:* str

---

##### `subject_mode_input`<sup>Optional</sup> <a name="subject_mode_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput"></a>

```python
subject_mode_input: str
```

- *Type:* str

---

##### `subject_regex_input`<sup>Optional</sup> <a name="subject_regex_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput"></a>

```python
subject_regex_input: str
```

- *Type:* str

---

##### `body_mode`<sup>Required</sup> <a name="body_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode"></a>

```python
body_mode: str
```

- *Type:* str

---

##### `body_regex`<sup>Required</sup> <a name="body_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex"></a>

```python
body_regex: str
```

- *Type:* str

---

##### `from_email_mode`<sup>Required</sup> <a name="from_email_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode"></a>

```python
from_email_mode: str
```

- *Type:* str

---

##### `from_email_regex`<sup>Required</sup> <a name="from_email_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex"></a>

```python
from_email_regex: str
```

- *Type:* str

---

##### `subject_mode`<sup>Required</sup> <a name="subject_mode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode"></a>

```python
subject_mode: str
```

- *Type:* str

---

##### `subject_regex`<sup>Required</sup> <a name="subject_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex"></a>

```python
subject_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceIntegrationEmailFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>]

---


### ServiceIntegrationEmailParserList <a name="ServiceIntegrationEmailParserList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceIntegrationEmailParserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]]

---


### ServiceIntegrationEmailParserMatchPredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate">reset_predicate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate"></a>

```python
def put_predicate(
  value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]

---

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate"></a>

```python
def reset_predicate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput">predicate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate"></a>

```python
predicate: ServiceIntegrationEmailParserMatchPredicatePredicateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a>

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput"></a>

```python
predicate_input: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue"></a>

```python
internal_value: ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]

---


### ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart">reset_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate">reset_predicate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate"></a>

```python
def put_predicate(
  value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]

---

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_part` <a name="reset_part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart"></a>

```python
def reset_part() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate"></a>

```python
def reset_predicate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput">part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput">predicate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part">part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate"></a>

```python
predicate: ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a>

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput"></a>

```python
part_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput"></a>

```python
predicate_input: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part"></a>

```python
part: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceIntegrationEmailParserMatchPredicatePredicate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]]

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput">part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part">part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput"></a>

```python
part_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part"></a>

```python
part: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceIntegrationEmailParserMatchPredicatePredicatePredicate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>]

---


### ServiceIntegrationEmailParserOutputReference <a name="ServiceIntegrationEmailParserOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate">put_match_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor">put_value_extractor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor">reset_value_extractor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_predicate` <a name="put_match_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate"></a>

```python
def put_match_predicate(
  type: str,
  predicate: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserMatchPredicatePredicate]] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#type ServiceIntegration#type}.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate.parameter.predicate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

##### `put_value_extractor` <a name="put_value_extractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor"></a>

```python
def put_value_extractor(
  value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserValueExtractor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]

---

##### `reset_value_extractor` <a name="reset_value_extractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor"></a>

```python
def reset_value_extractor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate">match_predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor">value_extractor</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput">match_predicate_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput">value_extractor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `match_predicate`<sup>Required</sup> <a name="match_predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate"></a>

```python
match_predicate: ServiceIntegrationEmailParserMatchPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a>

---

##### `value_extractor`<sup>Required</sup> <a name="value_extractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor"></a>

```python
value_extractor: ServiceIntegrationEmailParserValueExtractorList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `match_predicate_input`<sup>Optional</sup> <a name="match_predicate_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput"></a>

```python
match_predicate_input: ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `value_extractor_input`<sup>Optional</sup> <a name="value_extractor_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput"></a>

```python
value_extractor_input: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserValueExtractor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceIntegrationEmailParser]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>]

---


### ServiceIntegrationEmailParserValueExtractorList <a name="ServiceIntegrationEmailParserValueExtractorList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserValueExtractorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceIntegrationEmailParserValueExtractorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceIntegrationEmailParserValueExtractor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]]

---


### ServiceIntegrationEmailParserValueExtractorOutputReference <a name="ServiceIntegrationEmailParserValueExtractorOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_integration

serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore">reset_ends_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter">reset_starts_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ends_before` <a name="reset_ends_before" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore"></a>

```python
def reset_ends_before() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_starts_after` <a name="reset_starts_after" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter"></a>

```python
def reset_starts_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput">ends_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput">part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput">starts_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput">value_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore">ends_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part">part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter">starts_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName">value_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ends_before_input`<sup>Optional</sup> <a name="ends_before_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput"></a>

```python
ends_before_input: str
```

- *Type:* str

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput"></a>

```python
part_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `starts_after_input`<sup>Optional</sup> <a name="starts_after_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput"></a>

```python
starts_after_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_name_input`<sup>Optional</sup> <a name="value_name_input" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput"></a>

```python
value_name_input: str
```

- *Type:* str

---

##### `ends_before`<sup>Required</sup> <a name="ends_before" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore"></a>

```python
ends_before: str
```

- *Type:* str

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part"></a>

```python
part: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `starts_after`<sup>Required</sup> <a name="starts_after" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter"></a>

```python
starts_after: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value_name`<sup>Required</sup> <a name="value_name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName"></a>

```python
value_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceIntegrationEmailParserValueExtractor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>]

---



