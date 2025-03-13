# `schedule` Submodule <a name="`schedule` Submodule" id="@cdktf/provider-pagerduty.schedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedule <a name="Schedule" id="@cdktf/provider-pagerduty.schedule.Schedule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule pagerduty_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.Schedule.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.Schedule(scope: Construct, id: string, config: ScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig">ScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.schedule.Schedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig">ScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.putLayer">putLayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetOverflow">resetOverflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.Schedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.schedule.Schedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.schedule.Schedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.schedule.Schedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.schedule.Schedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.schedule.Schedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.schedule.Schedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.schedule.Schedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.schedule.Schedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.schedule.Schedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.schedule.Schedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.schedule.Schedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.schedule.Schedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.schedule.Schedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.Schedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.schedule.Schedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.Schedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.schedule.Schedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.Schedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.schedule.Schedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.schedule.Schedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.schedule.Schedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.schedule.Schedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.Schedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLayer` <a name="putLayer" id="@cdktf/provider-pagerduty.schedule.Schedule.putLayer"></a>

```typescript
public putLayer(value: IResolvable | ScheduleLayer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.schedule.Schedule.putLayer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.schedule.Schedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.schedule.Schedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.schedule.Schedule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverflow` <a name="resetOverflow" id="@cdktf/provider-pagerduty.schedule.Schedule.resetOverflow"></a>

```typescript
public resetOverflow(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-pagerduty.schedule.Schedule.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.schedule.Schedule.isConstruct"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

schedule.Schedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.schedule.Schedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.schedule.Schedule.isTerraformElement"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

schedule.Schedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.schedule.Schedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.schedule.Schedule.isTerraformResource"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

schedule.Schedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.schedule.Schedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

schedule.Schedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Schedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Schedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.schedule.Schedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Schedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.finalSchedule">finalSchedule</a></code> | <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList">ScheduleFinalScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.layer">layer</a></code> | <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList">ScheduleLayerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.layerInput">layerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.overflowInput">overflowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.overflow">overflow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.schedule.Schedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.schedule.Schedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.Schedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.schedule.Schedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.schedule.Schedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.schedule.Schedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.schedule.Schedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.schedule.Schedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.schedule.Schedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.schedule.Schedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.schedule.Schedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.schedule.Schedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.schedule.Schedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.schedule.Schedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `finalSchedule`<sup>Required</sup> <a name="finalSchedule" id="@cdktf/provider-pagerduty.schedule.Schedule.property.finalSchedule"></a>

```typescript
public readonly finalSchedule: ScheduleFinalScheduleList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList">ScheduleFinalScheduleList</a>

---

##### `layer`<sup>Required</sup> <a name="layer" id="@cdktf/provider-pagerduty.schedule.Schedule.property.layer"></a>

```typescript
public readonly layer: ScheduleLayerList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList">ScheduleLayerList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `layerInput`<sup>Optional</sup> <a name="layerInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.layerInput"></a>

```typescript
public readonly layerInput: IResolvable | ScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overflowInput`<sup>Optional</sup> <a name="overflowInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.overflowInput"></a>

```typescript
public readonly overflowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-pagerduty.schedule.Schedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.schedule.Schedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.Schedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.schedule.Schedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overflow`<sup>Required</sup> <a name="overflow" id="@cdktf/provider-pagerduty.schedule.Schedule.property.overflow"></a>

```typescript
public readonly overflow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-pagerduty.schedule.Schedule.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.schedule.Schedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.Schedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.schedule.Schedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScheduleConfig <a name="ScheduleConfig" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

const scheduleConfig: schedule.ScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.layer">layer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]</code> | layer block. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#time_zone Schedule#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#description Schedule#description}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#id Schedule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#name Schedule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.overflow">overflow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#overflow Schedule#overflow}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.teams">teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#teams Schedule#teams}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `layer`<sup>Required</sup> <a name="layer" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.layer"></a>

```typescript
public readonly layer: IResolvable | ScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]

layer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#layer Schedule#layer}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#time_zone Schedule#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#description Schedule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#id Schedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#name Schedule#name}.

---

##### `overflow`<sup>Optional</sup> <a name="overflow" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.overflow"></a>

```typescript
public readonly overflow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#overflow Schedule#overflow}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.schedule.ScheduleConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#teams Schedule#teams}.

---

### ScheduleFinalSchedule <a name="ScheduleFinalSchedule" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalSchedule.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

const scheduleFinalSchedule: schedule.ScheduleFinalSchedule = { ... }
```


### ScheduleLayer <a name="ScheduleLayer" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

const scheduleLayer: schedule.ScheduleLayer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.rotationTurnLengthSeconds">rotationTurnLengthSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#rotation_turn_length_seconds Schedule#rotation_turn_length_seconds}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.rotationVirtualStart">rotationVirtualStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#rotation_virtual_start Schedule#rotation_virtual_start}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start Schedule#start}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#users Schedule#users}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#end Schedule#end}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#name Schedule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.restriction">restriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]</code> | restriction block. |

---

##### `rotationTurnLengthSeconds`<sup>Required</sup> <a name="rotationTurnLengthSeconds" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.rotationTurnLengthSeconds"></a>

```typescript
public readonly rotationTurnLengthSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#rotation_turn_length_seconds Schedule#rotation_turn_length_seconds}.

---

##### `rotationVirtualStart`<sup>Required</sup> <a name="rotationVirtualStart" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.rotationVirtualStart"></a>

```typescript
public readonly rotationVirtualStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#rotation_virtual_start Schedule#rotation_virtual_start}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start Schedule#start}.

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#users Schedule#users}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#end Schedule#end}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#name Schedule#name}.

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktf/provider-pagerduty.schedule.ScheduleLayer.property.restriction"></a>

```typescript
public readonly restriction: IResolvable | ScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#restriction Schedule#restriction}

---

### ScheduleLayerRestriction <a name="ScheduleLayerRestriction" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

const scheduleLayerRestriction: schedule.ScheduleLayerRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#duration_seconds Schedule#duration_seconds}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.startTimeOfDay">startTimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start_time_of_day Schedule#start_time_of_day}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#type Schedule#type}. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start_day_of_week Schedule#start_day_of_week}. |

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#duration_seconds Schedule#duration_seconds}.

---

##### `startTimeOfDay`<sup>Required</sup> <a name="startTimeOfDay" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start_time_of_day Schedule#start_time_of_day}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#type Schedule#type}.

---

##### `startDayOfWeek`<sup>Optional</sup> <a name="startDayOfWeek" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.1/docs/resources/schedule#start_day_of_week Schedule#start_day_of_week}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScheduleFinalScheduleList <a name="ScheduleFinalScheduleList" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleFinalScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.get"></a>

```typescript
public get(index: number): ScheduleFinalScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ScheduleFinalScheduleOutputReference <a name="ScheduleFinalScheduleOutputReference" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleFinalScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.renderedCoveragePercentage">renderedCoveragePercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalSchedule">ScheduleFinalSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `renderedCoveragePercentage`<sup>Required</sup> <a name="renderedCoveragePercentage" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.renderedCoveragePercentage"></a>

```typescript
public readonly renderedCoveragePercentage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.schedule.ScheduleFinalScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ScheduleFinalSchedule;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.schedule.ScheduleFinalSchedule">ScheduleFinalSchedule</a>

---


### ScheduleLayerList <a name="ScheduleLayerList" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleLayerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.get"></a>

```typescript
public get(index: number): ScheduleLayerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>[]

---


### ScheduleLayerOutputReference <a name="ScheduleLayerOutputReference" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleLayerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.putRestriction">putRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetRestriction">resetRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestriction` <a name="putRestriction" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.putRestriction"></a>

```typescript
public putRestriction(value: IResolvable | ScheduleLayerRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.putRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRestriction` <a name="resetRestriction" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.resetRestriction"></a>

```typescript
public resetRestriction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.renderedCoveragePercentage">renderedCoveragePercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList">ScheduleLayerRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.restrictionInput">restrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationTurnLengthSecondsInput">rotationTurnLengthSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationVirtualStartInput">rotationVirtualStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationTurnLengthSeconds">rotationTurnLengthSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationVirtualStart">rotationVirtualStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `renderedCoveragePercentage`<sup>Required</sup> <a name="renderedCoveragePercentage" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.renderedCoveragePercentage"></a>

```typescript
public readonly renderedCoveragePercentage: string;
```

- *Type:* string

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.restriction"></a>

```typescript
public readonly restriction: ScheduleLayerRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList">ScheduleLayerRestrictionList</a>

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restrictionInput`<sup>Optional</sup> <a name="restrictionInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.restrictionInput"></a>

```typescript
public readonly restrictionInput: IResolvable | ScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]

---

##### `rotationTurnLengthSecondsInput`<sup>Optional</sup> <a name="rotationTurnLengthSecondsInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationTurnLengthSecondsInput"></a>

```typescript
public readonly rotationTurnLengthSecondsInput: number;
```

- *Type:* number

---

##### `rotationVirtualStartInput`<sup>Optional</sup> <a name="rotationVirtualStartInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationVirtualStartInput"></a>

```typescript
public readonly rotationVirtualStartInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rotationTurnLengthSeconds`<sup>Required</sup> <a name="rotationTurnLengthSeconds" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationTurnLengthSeconds"></a>

```typescript
public readonly rotationTurnLengthSeconds: number;
```

- *Type:* number

---

##### `rotationVirtualStart`<sup>Required</sup> <a name="rotationVirtualStart" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.rotationVirtualStart"></a>

```typescript
public readonly rotationVirtualStart: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScheduleLayer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayer">ScheduleLayer</a>

---


### ScheduleLayerRestrictionList <a name="ScheduleLayerRestrictionList" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleLayerRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.get"></a>

```typescript
public get(index: number): ScheduleLayerRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>[]

---


### ScheduleLayerRestrictionOutputReference <a name="ScheduleLayerRestrictionOutputReference" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer"></a>

```typescript
import { schedule } from '@cdktf/provider-pagerduty'

new schedule.ScheduleLayerRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.resetStartDayOfWeek">resetStartDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartDayOfWeek` <a name="resetStartDayOfWeek" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.resetStartDayOfWeek"></a>

```typescript
public resetStartDayOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startDayOfWeekInput">startDayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startTimeOfDayInput">startTimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startTimeOfDay">startTimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `startDayOfWeekInput`<sup>Optional</sup> <a name="startDayOfWeekInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startDayOfWeekInput"></a>

```typescript
public readonly startDayOfWeekInput: number;
```

- *Type:* number

---

##### `startTimeOfDayInput`<sup>Optional</sup> <a name="startTimeOfDayInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startTimeOfDayInput"></a>

```typescript
public readonly startTimeOfDayInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `startDayOfWeek`<sup>Required</sup> <a name="startDayOfWeek" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

---

##### `startTimeOfDay`<sup>Required</sup> <a name="startTimeOfDay" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.schedule.ScheduleLayerRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScheduleLayerRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.schedule.ScheduleLayerRestriction">ScheduleLayerRestriction</a>

---



