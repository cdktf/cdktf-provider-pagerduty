# `pagerduty_automation_actions_action`

Refer to the Terraform Registory for docs: [`pagerduty_automation_actions_action`](https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action).

# `automationActionsAction` Submodule <a name="`automationActionsAction` Submodule" id="@cdktf/provider-pagerduty.automationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsAction <a name="AutomationActionsAction" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

new automationActionsAction.AutomationActionsAction(scope: Construct, id: string, config: AutomationActionsActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference">putActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification">resetActionClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime">resetModifyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId">resetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType">resetRunnerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActionDataReference` <a name="putActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference"></a>

```typescript
public putActionDataReference(value: AutomationActionsActionActionDataReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `resetActionClassification` <a name="resetActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification"></a>

```typescript
public resetActionClassification(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModifyTime` <a name="resetModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime"></a>

```typescript
public resetModifyTime(): void
```

##### `resetRunnerId` <a name="resetRunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId"></a>

```typescript
public resetRunnerId(): void
```

##### `resetRunnerType` <a name="resetRunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType"></a>

```typescript
public resetRunnerType(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

automationActionsAction.AutomationActionsAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

automationActionsAction.AutomationActionsAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

automationActionsAction.AutomationActionsAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference">actionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput">actionClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput">actionDataReferenceInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput">creationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput">modifyTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput">runnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput">runnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification">actionClassification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime">modifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId">runnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType">runnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionDataReference`<sup>Required</sup> <a name="actionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference"></a>

```typescript
public readonly actionDataReference: AutomationActionsActionActionDataReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a>

---

##### `actionClassificationInput`<sup>Optional</sup> <a name="actionClassificationInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput"></a>

```typescript
public readonly actionClassificationInput: string;
```

- *Type:* string

---

##### `actionDataReferenceInput`<sup>Optional</sup> <a name="actionDataReferenceInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput"></a>

```typescript
public readonly actionDataReferenceInput: AutomationActionsActionActionDataReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modifyTimeInput`<sup>Optional</sup> <a name="modifyTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput"></a>

```typescript
public readonly modifyTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runnerIdInput`<sup>Optional</sup> <a name="runnerIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput"></a>

```typescript
public readonly runnerIdInput: string;
```

- *Type:* string

---

##### `runnerTypeInput`<sup>Optional</sup> <a name="runnerTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput"></a>

```typescript
public readonly runnerTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `actionClassification`<sup>Required</sup> <a name="actionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification"></a>

```typescript
public readonly actionClassification: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifyTime`<sup>Required</sup> <a name="modifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime"></a>

```typescript
public readonly modifyTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runnerId`<sup>Required</sup> <a name="runnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId"></a>

```typescript
public readonly runnerId: string;
```

- *Type:* string

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType"></a>

```typescript
public readonly runnerType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionActionDataReference <a name="AutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.Initializer"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

const automationActionsActionActionDataReference: automationActionsAction.AutomationActionsActionActionDataReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand">invocationCommand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments">processAutomationJobArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId">processAutomationJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter">processAutomationNodeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#script AutomationActionsAction#script}. |

---

##### `invocationCommand`<sup>Optional</sup> <a name="invocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand"></a>

```typescript
public readonly invocationCommand: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}.

---

##### `processAutomationJobArguments`<sup>Optional</sup> <a name="processAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments"></a>

```typescript
public readonly processAutomationJobArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}.

---

##### `processAutomationJobId`<sup>Optional</sup> <a name="processAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId"></a>

```typescript
public readonly processAutomationJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}.

---

##### `processAutomationNodeFilter`<sup>Optional</sup> <a name="processAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter"></a>

```typescript
public readonly processAutomationNodeFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#script AutomationActionsAction#script}.

---

### AutomationActionsActionConfig <a name="AutomationActionsActionConfig" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.Initializer"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

const automationActionsActionConfig: automationActionsAction.AutomationActionsActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference">actionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | action_data_reference block. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#action_type AutomationActionsAction#action_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#name AutomationActionsAction#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification">actionClassification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#action_classification AutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime">creationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#creation_time AutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#description AutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#id AutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime">modifyTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#modify_time AutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId">runnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#runner_id AutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType">runnerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#runner_type AutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#type AutomationActionsAction#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionDataReference`<sup>Required</sup> <a name="actionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference"></a>

```typescript
public readonly actionDataReference: AutomationActionsActionActionDataReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

action_data_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#action_type AutomationActionsAction#action_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#name AutomationActionsAction#name}.

---

##### `actionClassification`<sup>Optional</sup> <a name="actionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification"></a>

```typescript
public readonly actionClassification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#action_classification AutomationActionsAction#action_classification}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#creation_time AutomationActionsAction#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#description AutomationActionsAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#id AutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modifyTime`<sup>Optional</sup> <a name="modifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime"></a>

```typescript
public readonly modifyTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#modify_time AutomationActionsAction#modify_time}.

---

##### `runnerId`<sup>Optional</sup> <a name="runnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId"></a>

```typescript
public readonly runnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#runner_id AutomationActionsAction#runner_id}.

---

##### `runnerType`<sup>Optional</sup> <a name="runnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType"></a>

```typescript
public readonly runnerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#runner_type AutomationActionsAction#runner_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action#type AutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationActionsActionActionDataReferenceOutputReference <a name="AutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```typescript
import { automationActionsAction } from '@cdktf/provider-pagerduty'

new automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand">resetInvocationCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments">resetProcessAutomationJobArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId">resetProcessAutomationJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter">resetProcessAutomationNodeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvocationCommand` <a name="resetInvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand"></a>

```typescript
public resetInvocationCommand(): void
```

##### `resetProcessAutomationJobArguments` <a name="resetProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments"></a>

```typescript
public resetProcessAutomationJobArguments(): void
```

##### `resetProcessAutomationJobId` <a name="resetProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId"></a>

```typescript
public resetProcessAutomationJobId(): void
```

##### `resetProcessAutomationNodeFilter` <a name="resetProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter"></a>

```typescript
public resetProcessAutomationNodeFilter(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput">invocationCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput">processAutomationJobArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput">processAutomationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput">processAutomationNodeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">invocationCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">processAutomationJobArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">processAutomationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">processAutomationNodeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invocationCommandInput`<sup>Optional</sup> <a name="invocationCommandInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput"></a>

```typescript
public readonly invocationCommandInput: string;
```

- *Type:* string

---

##### `processAutomationJobArgumentsInput`<sup>Optional</sup> <a name="processAutomationJobArgumentsInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput"></a>

```typescript
public readonly processAutomationJobArgumentsInput: string;
```

- *Type:* string

---

##### `processAutomationJobIdInput`<sup>Optional</sup> <a name="processAutomationJobIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput"></a>

```typescript
public readonly processAutomationJobIdInput: string;
```

- *Type:* string

---

##### `processAutomationNodeFilterInput`<sup>Optional</sup> <a name="processAutomationNodeFilterInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput"></a>

```typescript
public readonly processAutomationNodeFilterInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `invocationCommand`<sup>Required</sup> <a name="invocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```typescript
public readonly invocationCommand: string;
```

- *Type:* string

---

##### `processAutomationJobArguments`<sup>Required</sup> <a name="processAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```typescript
public readonly processAutomationJobArguments: string;
```

- *Type:* string

---

##### `processAutomationJobId`<sup>Required</sup> <a name="processAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```typescript
public readonly processAutomationJobId: string;
```

- *Type:* string

---

##### `processAutomationNodeFilter`<sup>Required</sup> <a name="processAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```typescript
public readonly processAutomationNodeFilter: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationActionsActionActionDataReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---



