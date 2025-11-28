# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-pagerduty.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-pagerduty.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service pagerduty_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.Service.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.Service(scope: Construct, id: string, config: ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters">putAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters">putAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule">putIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putScheduledActions">putScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putSupportHours">putSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout">resetAcknowledgementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertCreation">resetAlertCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGrouping">resetAlertGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters">resetAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout">resetAlertGroupingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters">resetAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout">resetAutoResolveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule">resetIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetResponsePlay">resetResponsePlay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetScheduledActions">resetScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetSupportHours">resetSupportHours</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.service.Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.service.Service.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.service.Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.service.Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.service.Service.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.service.Service.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.service.Service.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.service.Service.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.service.Service.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertGroupingParameters` <a name="putAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters"></a>

```typescript
public putAlertGroupingParameters(value: ServiceAlertGroupingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `putAutoPauseNotificationsParameters` <a name="putAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters"></a>

```typescript
public putAutoPauseNotificationsParameters(value: ServiceAutoPauseNotificationsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `putIncidentUrgencyRule` <a name="putIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule"></a>

```typescript
public putIncidentUrgencyRule(value: ServiceIncidentUrgencyRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `putScheduledActions` <a name="putScheduledActions" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions"></a>

```typescript
public putScheduledActions(value: IResolvable | ServiceScheduledActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]

---

##### `putSupportHours` <a name="putSupportHours" id="@cdktf/provider-pagerduty.service.Service.putSupportHours"></a>

```typescript
public putSupportHours(value: ServiceSupportHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `resetAcknowledgementTimeout` <a name="resetAcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout"></a>

```typescript
public resetAcknowledgementTimeout(): void
```

##### `resetAlertCreation` <a name="resetAlertCreation" id="@cdktf/provider-pagerduty.service.Service.resetAlertCreation"></a>

```typescript
public resetAlertCreation(): void
```

##### `resetAlertGrouping` <a name="resetAlertGrouping" id="@cdktf/provider-pagerduty.service.Service.resetAlertGrouping"></a>

```typescript
public resetAlertGrouping(): void
```

##### `resetAlertGroupingParameters` <a name="resetAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters"></a>

```typescript
public resetAlertGroupingParameters(): void
```

##### `resetAlertGroupingTimeout` <a name="resetAlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout"></a>

```typescript
public resetAlertGroupingTimeout(): void
```

##### `resetAutoPauseNotificationsParameters` <a name="resetAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters"></a>

```typescript
public resetAutoPauseNotificationsParameters(): void
```

##### `resetAutoResolveTimeout` <a name="resetAutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout"></a>

```typescript
public resetAutoResolveTimeout(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.service.Service.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.service.Service.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncidentUrgencyRule` <a name="resetIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule"></a>

```typescript
public resetIncidentUrgencyRule(): void
```

##### `resetResponsePlay` <a name="resetResponsePlay" id="@cdktf/provider-pagerduty.service.Service.resetResponsePlay"></a>

```typescript
public resetResponsePlay(): void
```

##### `resetScheduledActions` <a name="resetScheduledActions" id="@cdktf/provider-pagerduty.service.Service.resetScheduledActions"></a>

```typescript
public resetScheduledActions(): void
```

##### `resetSupportHours` <a name="resetSupportHours" id="@cdktf/provider-pagerduty.service.Service.resetSupportHours"></a>

```typescript
public resetSupportHours(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.service.Service.isConstruct"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

service.Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

service.Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

service.Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

service.Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters">alertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters">autoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule">incidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp">lastIncidentTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActions">scheduledActions</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHours">supportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput">acknowledgementTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreationInput">alertCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput">alertGroupingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput">alertGroupingParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput">alertGroupingTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput">autoPauseNotificationsParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput">autoResolveTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput">incidentUrgencyRuleInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlayInput">responsePlayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput">scheduledActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHoursInput">supportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout">acknowledgementTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreation">alertCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGrouping">alertGrouping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout">alertGroupingTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout">autoResolveTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicy">escalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlay">responsePlay</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.service.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.service.Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.service.Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.service.Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.service.Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.Service.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertGroupingParameters`<sup>Required</sup> <a name="alertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters"></a>

```typescript
public readonly alertGroupingParameters: ServiceAlertGroupingParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a>

---

##### `autoPauseNotificationsParameters`<sup>Required</sup> <a name="autoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters"></a>

```typescript
public readonly autoPauseNotificationsParameters: ServiceAutoPauseNotificationsParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-pagerduty.service.Service.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.service.Service.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `incidentUrgencyRule`<sup>Required</sup> <a name="incidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule"></a>

```typescript
public readonly incidentUrgencyRule: ServiceIncidentUrgencyRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a>

---

##### `lastIncidentTimestamp`<sup>Required</sup> <a name="lastIncidentTimestamp" id="@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp"></a>

```typescript
public readonly lastIncidentTimestamp: string;
```

- *Type:* string

---

##### `scheduledActions`<sup>Required</sup> <a name="scheduledActions" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActions"></a>

```typescript
public readonly scheduledActions: ServiceScheduledActionsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-pagerduty.service.Service.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportHours`<sup>Required</sup> <a name="supportHours" id="@cdktf/provider-pagerduty.service.Service.property.supportHours"></a>

```typescript
public readonly supportHours: ServiceSupportHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `acknowledgementTimeoutInput`<sup>Optional</sup> <a name="acknowledgementTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput"></a>

```typescript
public readonly acknowledgementTimeoutInput: string;
```

- *Type:* string

---

##### `alertCreationInput`<sup>Optional</sup> <a name="alertCreationInput" id="@cdktf/provider-pagerduty.service.Service.property.alertCreationInput"></a>

```typescript
public readonly alertCreationInput: string;
```

- *Type:* string

---

##### `alertGroupingInput`<sup>Optional</sup> <a name="alertGroupingInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput"></a>

```typescript
public readonly alertGroupingInput: string;
```

- *Type:* string

---

##### `alertGroupingParametersInput`<sup>Optional</sup> <a name="alertGroupingParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput"></a>

```typescript
public readonly alertGroupingParametersInput: ServiceAlertGroupingParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `alertGroupingTimeoutInput`<sup>Optional</sup> <a name="alertGroupingTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput"></a>

```typescript
public readonly alertGroupingTimeoutInput: string;
```

- *Type:* string

---

##### `autoPauseNotificationsParametersInput`<sup>Optional</sup> <a name="autoPauseNotificationsParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput"></a>

```typescript
public readonly autoPauseNotificationsParametersInput: ServiceAutoPauseNotificationsParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `autoResolveTimeoutInput`<sup>Optional</sup> <a name="autoResolveTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput"></a>

```typescript
public readonly autoResolveTimeoutInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.service.Service.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput"></a>

```typescript
public readonly escalationPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.service.Service.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incidentUrgencyRuleInput`<sup>Optional</sup> <a name="incidentUrgencyRuleInput" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput"></a>

```typescript
public readonly incidentUrgencyRuleInput: ServiceIncidentUrgencyRule;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.service.Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `responsePlayInput`<sup>Optional</sup> <a name="responsePlayInput" id="@cdktf/provider-pagerduty.service.Service.property.responsePlayInput"></a>

```typescript
public readonly responsePlayInput: string;
```

- *Type:* string

---

##### `scheduledActionsInput`<sup>Optional</sup> <a name="scheduledActionsInput" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput"></a>

```typescript
public readonly scheduledActionsInput: IResolvable | ServiceScheduledActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]

---

##### `supportHoursInput`<sup>Optional</sup> <a name="supportHoursInput" id="@cdktf/provider-pagerduty.service.Service.property.supportHoursInput"></a>

```typescript
public readonly supportHoursInput: ServiceSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `acknowledgementTimeout`<sup>Required</sup> <a name="acknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout"></a>

```typescript
public readonly acknowledgementTimeout: string;
```

- *Type:* string

---

##### `alertCreation`<sup>Required</sup> <a name="alertCreation" id="@cdktf/provider-pagerduty.service.Service.property.alertCreation"></a>

```typescript
public readonly alertCreation: string;
```

- *Type:* string

---

##### `alertGrouping`<sup>Required</sup> <a name="alertGrouping" id="@cdktf/provider-pagerduty.service.Service.property.alertGrouping"></a>

```typescript
public readonly alertGrouping: string;
```

- *Type:* string

---

##### `alertGroupingTimeout`<sup>Required</sup> <a name="alertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout"></a>

```typescript
public readonly alertGroupingTimeout: string;
```

- *Type:* string

---

##### `autoResolveTimeout`<sup>Required</sup> <a name="autoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout"></a>

```typescript
public readonly autoResolveTimeout: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.service.Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicy"></a>

```typescript
public readonly escalationPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `responsePlay`<sup>Required</sup> <a name="responsePlay" id="@cdktf/provider-pagerduty.service.Service.property.responsePlay"></a>

```typescript
public readonly responsePlay: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.service.Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAlertGroupingParameters <a name="ServiceAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceAlertGroupingParameters: service.ServiceAlertGroupingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config"></a>

```typescript
public readonly config: ServiceAlertGroupingParametersConfig;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#config Service#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="ServiceAlertGroupingParametersConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceAlertGroupingParametersConfig: service.ServiceAlertGroupingParametersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate">aggregate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#aggregate Service#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#fields Service#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#timeout Service#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow">timeWindow</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#time_window Service#time_window}. |

---

##### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```typescript
public readonly aggregate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#aggregate Service#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#fields Service#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#timeout Service#timeout}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow"></a>

```typescript
public readonly timeWindow: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#time_window Service#time_window}.

---

### ServiceAutoPauseNotificationsParameters <a name="ServiceAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceAutoPauseNotificationsParameters: service.ServiceAutoPauseNotificationsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#enabled Service#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#timeout Service#timeout}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#enabled Service#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#timeout Service#timeout}.

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-pagerduty.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceConfig: service.ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy">escalationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout">acknowledgementTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation">alertCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping">alertGrouping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters">alertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout">alertGroupingTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters">autoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout">autoResolveTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule">incidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay">responsePlay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions">scheduledActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]</code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours">supportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy"></a>

```typescript
public readonly escalationPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#name Service#name}.

---

##### `acknowledgementTimeout`<sup>Optional</sup> <a name="acknowledgementTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout"></a>

```typescript
public readonly acknowledgementTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alertCreation`<sup>Optional</sup> <a name="alertCreation" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation"></a>

```typescript
public readonly alertCreation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `alertGrouping`<sup>Optional</sup> <a name="alertGrouping" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping"></a>

```typescript
public readonly alertGrouping: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `alertGroupingParameters`<sup>Optional</sup> <a name="alertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters"></a>

```typescript
public readonly alertGroupingParameters: ServiceAlertGroupingParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alertGroupingTimeout`<sup>Optional</sup> <a name="alertGroupingTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout"></a>

```typescript
public readonly alertGroupingTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `autoPauseNotificationsParameters`<sup>Optional</sup> <a name="autoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters"></a>

```typescript
public readonly autoPauseNotificationsParameters: ServiceAutoPauseNotificationsParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `autoResolveTimeout`<sup>Optional</sup> <a name="autoResolveTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout"></a>

```typescript
public readonly autoResolveTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#description Service#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incidentUrgencyRule`<sup>Optional</sup> <a name="incidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule"></a>

```typescript
public readonly incidentUrgencyRule: ServiceIncidentUrgencyRule;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `responsePlay`<sup>Optional</sup> <a name="responsePlay" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay"></a>

```typescript
public readonly responsePlay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#response_play Service#response_play}.

---

##### `scheduledActions`<sup>Optional</sup> <a name="scheduledActions" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions"></a>

```typescript
public readonly scheduledActions: IResolvable | ServiceScheduledActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `supportHours`<sup>Optional</sup> <a name="supportHours" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours"></a>

```typescript
public readonly supportHours: ServiceSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#support_hours Service#support_hours}

---

### ServiceIncidentUrgencyRule <a name="ServiceIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRule: service.ServiceIncidentUrgencyRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours">duringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | during_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours">outsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | outside_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency">urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

##### `duringSupportHours`<sup>Optional</sup> <a name="duringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```typescript
public readonly duringSupportHours: ServiceIncidentUrgencyRuleDuringSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#during_support_hours Service#during_support_hours}

---

##### `outsideSupportHours`<sup>Optional</sup> <a name="outsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```typescript
public readonly outsideSupportHours: ServiceIncidentUrgencyRuleOutsideSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="ServiceIncidentUrgencyRuleDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRuleDuringSupportHours: service.ServiceIncidentUrgencyRuleDuringSupportHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency">urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="ServiceIncidentUrgencyRuleOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRuleOutsideSupportHours: service.ServiceIncidentUrgencyRuleOutsideSupportHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency">urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#urgency Service#urgency}.

---

### ServiceScheduledActions <a name="ServiceScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceScheduledActions: service.ServiceScheduledActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at">at</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]</code> | at block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency">toUrgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#to_urgency Service#to_urgency}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at"></a>

```typescript
public readonly at: IResolvable | ServiceScheduledActionsAt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#at Service#at}

---

##### `toUrgency`<sup>Optional</sup> <a name="toUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency"></a>

```typescript
public readonly toUrgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#to_urgency Service#to_urgency}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

### ServiceScheduledActionsAt <a name="ServiceScheduledActionsAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceScheduledActionsAt: service.ServiceScheduledActionsAt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#name Service#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

### ServiceSupportHours <a name="ServiceSupportHours" id="@cdktf/provider-pagerduty.service.ServiceSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

const serviceSupportHours: service.ServiceSupportHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek">daysOfWeek</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#days_of_week Service#days_of_week}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#end_time Service#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#start_time Service#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#time_zone Service#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#days_of_week Service#days_of_week}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#end_time Service#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#start_time Service#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#time_zone Service#time_zone}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/service#type Service#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAlertGroupingParametersConfigOutputReference <a name="ServiceAlertGroupingParametersConfigOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceAlertGroupingParametersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate">resetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregate` <a name="resetAggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```typescript
public resetAggregate(): void
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput">aggregateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate">aggregate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow">timeWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregateInput`<sup>Optional</sup> <a name="aggregateInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```typescript
public readonly aggregateInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: number;
```

- *Type:* number

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```typescript
public readonly aggregate: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceAlertGroupingParametersConfig;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---


### ServiceAlertGroupingParametersOutputReference <a name="ServiceAlertGroupingParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceAlertGroupingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```typescript
public putConfig(value: ServiceAlertGroupingParametersConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```typescript
public readonly config: ServiceAlertGroupingParametersConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```typescript
public readonly configInput: ServiceAlertGroupingParametersConfig;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceAlertGroupingParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---


### ServiceAutoPauseNotificationsParametersOutputReference <a name="ServiceAutoPauseNotificationsParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceAutoPauseNotificationsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceAutoPauseNotificationsParameters;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```typescript
public resetUrgency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceIncidentUrgencyRuleDuringSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---


### ServiceIncidentUrgencyRuleOutputReference <a name="ServiceIncidentUrgencyRuleOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceIncidentUrgencyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours">putDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours">putOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours">resetDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours">resetOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuringSupportHours` <a name="putDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```typescript
public putDuringSupportHours(value: ServiceIncidentUrgencyRuleDuringSupportHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `putOutsideSupportHours` <a name="putOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```typescript
public putOutsideSupportHours(value: ServiceIncidentUrgencyRuleOutsideSupportHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `resetDuringSupportHours` <a name="resetDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```typescript
public resetDuringSupportHours(): void
```

##### `resetOutsideSupportHours` <a name="resetOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```typescript
public resetOutsideSupportHours(): void
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```typescript
public resetUrgency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours">duringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours">outsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput">duringSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput">outsideSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency">urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duringSupportHours`<sup>Required</sup> <a name="duringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```typescript
public readonly duringSupportHours: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a>

---

##### `outsideSupportHours`<sup>Required</sup> <a name="outsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```typescript
public readonly outsideSupportHours: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a>

---

##### `duringSupportHoursInput`<sup>Optional</sup> <a name="duringSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```typescript
public readonly duringSupportHoursInput: ServiceIncidentUrgencyRuleDuringSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `outsideSupportHoursInput`<sup>Optional</sup> <a name="outsideSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```typescript
public readonly outsideSupportHoursInput: ServiceIncidentUrgencyRuleOutsideSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceIncidentUrgencyRule;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```typescript
public resetUrgency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceIncidentUrgencyRuleOutsideSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---


### ServiceScheduledActionsAtList <a name="ServiceScheduledActionsAtList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceScheduledActionsAtList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get"></a>

```typescript
public get(index: number): ServiceScheduledActionsAtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceScheduledActionsAt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]

---


### ServiceScheduledActionsAtOutputReference <a name="ServiceScheduledActionsAtOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceScheduledActionsAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceScheduledActionsAt;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>

---


### ServiceScheduledActionsList <a name="ServiceScheduledActionsList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceScheduledActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get"></a>

```typescript
public get(index: number): ServiceScheduledActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceScheduledActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>[]

---


### ServiceScheduledActionsOutputReference <a name="ServiceScheduledActionsOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceScheduledActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt">putAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt">resetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency">resetToUrgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAt` <a name="putAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt"></a>

```typescript
public putAt(value: IResolvable | ServiceScheduledActionsAt[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]

---

##### `resetAt` <a name="resetAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt"></a>

```typescript
public resetAt(): void
```

##### `resetToUrgency` <a name="resetToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency"></a>

```typescript
public resetToUrgency(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at">at</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput">atInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput">toUrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency">toUrgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at"></a>

```typescript
public readonly at: ServiceScheduledActionsAtList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a>

---

##### `atInput`<sup>Optional</sup> <a name="atInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput"></a>

```typescript
public readonly atInput: IResolvable | ServiceScheduledActionsAt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>[]

---

##### `toUrgencyInput`<sup>Optional</sup> <a name="toUrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput"></a>

```typescript
public readonly toUrgencyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `toUrgency`<sup>Required</sup> <a name="toUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency"></a>

```typescript
public readonly toUrgency: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceScheduledActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>

---


### ServiceSupportHoursOutputReference <a name="ServiceSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-pagerduty'

new service.ServiceSupportHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: number[];
```

- *Type:* number[]

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: number[];
```

- *Type:* number[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceSupportHours;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---



