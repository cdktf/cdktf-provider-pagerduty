# `webhookSubscription` Submodule <a name="`webhookSubscription` Submodule" id="@cdktf/provider-pagerduty.webhookSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookSubscription <a name="WebhookSubscription" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription pagerduty_webhook_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_method: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]],
  events: typing.List[str],
  filter: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]],
  active: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.deliveryMethod">delivery_method</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]</code> | delivery_method block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#events WebhookSubscription#events}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#active WebhookSubscription#active}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#description WebhookSubscription#description}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_method`<sup>Required</sup> <a name="delivery_method" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.deliveryMethod"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]

delivery_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#events WebhookSubscription#events}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#filter WebhookSubscription#filter}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#active WebhookSubscription#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#description WebhookSubscription#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod">put_delivery_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delivery_method` <a name="put_delivery_method" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod"></a>

```python
def put_delivery_method(
  value: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebhookSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebhookSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebhookSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod">delivery_method</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput">delivery_method_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_method`<sup>Required</sup> <a name="delivery_method" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod"></a>

```python
delivery_method: WebhookSubscriptionDeliveryMethodList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter"></a>

```python
filter: WebhookSubscriptionFilterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delivery_method_input`<sup>Optional</sup> <a name="delivery_method_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput"></a>

```python
delivery_method_input: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookSubscriptionConfig <a name="WebhookSubscriptionConfig" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_method: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]],
  events: typing.List[str],
  filter: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]],
  active: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod">delivery_method</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]</code> | delivery_method block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#events WebhookSubscription#events}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#active WebhookSubscription#active}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#description WebhookSubscription#description}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_method`<sup>Required</sup> <a name="delivery_method" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod"></a>

```python
delivery_method: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]

delivery_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#events WebhookSubscription#events}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#filter WebhookSubscription#filter}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#active WebhookSubscription#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#description WebhookSubscription#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

### WebhookSubscriptionDeliveryMethod <a name="WebhookSubscriptionDeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethod(
  custom_header: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethodCustomHeader]] = None,
  temporarily_disabled: typing.Union[bool, IResolvable] = None,
  type: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled">temporarily_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#url WebhookSubscription#url}. |

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader"></a>

```python
custom_header: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethodCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#custom_header WebhookSubscription#custom_header}

---

##### `temporarily_disabled`<sup>Optional</sup> <a name="temporarily_disabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled"></a>

```python
temporarily_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#url WebhookSubscription#url}.

---

### WebhookSubscriptionDeliveryMethodCustomHeader <a name="WebhookSubscriptionDeliveryMethodCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#name WebhookSubscription#name}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#value WebhookSubscription#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#name WebhookSubscription#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#value WebhookSubscription#value}.

---

### WebhookSubscriptionFilter <a name="WebhookSubscriptionFilter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionFilter(
  type: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WebhookSubscriptionDeliveryMethodCustomHeaderList <a name="WebhookSubscriptionDeliveryMethodCustomHeaderList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethodCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]

---


### WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference <a name="WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebhookSubscriptionDeliveryMethodCustomHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]

---


### WebhookSubscriptionDeliveryMethodList <a name="WebhookSubscriptionDeliveryMethodList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebhookSubscriptionDeliveryMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]]

---


### WebhookSubscriptionDeliveryMethodOutputReference <a name="WebhookSubscriptionDeliveryMethodOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader">put_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader">reset_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled">reset_temporarily_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_header` <a name="put_custom_header" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader"></a>

```python
def put_custom_header(
  value: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethodCustomHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]

---

##### `reset_custom_header` <a name="reset_custom_header" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader"></a>

```python
def reset_custom_header() -> None
```

##### `reset_temporarily_disabled` <a name="reset_temporarily_disabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled"></a>

```python
def reset_temporarily_disabled() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader">custom_header</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput">custom_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput">temporarily_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled">temporarily_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_header`<sup>Required</sup> <a name="custom_header" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader"></a>

```python
custom_header: WebhookSubscriptionDeliveryMethodCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a>

---

##### `custom_header_input`<sup>Optional</sup> <a name="custom_header_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput"></a>

```python
custom_header_input: typing.Union[IResolvable, typing.List[WebhookSubscriptionDeliveryMethodCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader">WebhookSubscriptionDeliveryMethodCustomHeader</a>]]

---

##### `temporarily_disabled_input`<sup>Optional</sup> <a name="temporarily_disabled_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput"></a>

```python
temporarily_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `temporarily_disabled`<sup>Required</sup> <a name="temporarily_disabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled"></a>

```python
temporarily_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebhookSubscriptionDeliveryMethod]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod">WebhookSubscriptionDeliveryMethod</a>]

---


### WebhookSubscriptionFilterList <a name="WebhookSubscriptionFilterList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebhookSubscriptionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebhookSubscriptionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]]

---


### WebhookSubscriptionFilterOutputReference <a name="WebhookSubscriptionFilterOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import webhook_subscription

webhookSubscription.WebhookSubscriptionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebhookSubscriptionFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter">WebhookSubscriptionFilter</a>]

---



