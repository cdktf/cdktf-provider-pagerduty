# `eventOrchestrationService` Submodule <a name="`eventOrchestrationService` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationService <a name="EventOrchestrationService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service pagerduty_event_orchestration_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationService(scope: Construct, id: string, config: EventOrchestrationServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig">EventOrchestrationServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig">EventOrchestrationServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll">putCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetEnableEventOrchestrationForService">resetEnableEventOrchestrationForService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatchAll` <a name="putCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll"></a>

```typescript
public putCatchAll(value: EventOrchestrationServiceCatchAll): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet"></a>

```typescript
public putSet(value: IResolvable | EventOrchestrationServiceSet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]

---

##### `resetEnableEventOrchestrationForService` <a name="resetEnableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetEnableEventOrchestrationForService"></a>

```typescript
public resetEnableEventOrchestrationForService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

eventOrchestrationService.EventOrchestrationService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

eventOrchestrationService.EventOrchestrationService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

eventOrchestrationService.EventOrchestrationService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

eventOrchestrationService.EventOrchestrationService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventOrchestrationService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventOrchestrationService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventOrchestrationService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference">EventOrchestrationServiceCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.set">set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList">EventOrchestrationServiceSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAllInput">catchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForServiceInput">enableEventOrchestrationForServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.setInput">setInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForService">enableEventOrchestrationForService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAll"></a>

```typescript
public readonly catchAll: EventOrchestrationServiceCatchAllOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference">EventOrchestrationServiceCatchAllOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.set"></a>

```typescript
public readonly set: EventOrchestrationServiceSetList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList">EventOrchestrationServiceSetList</a>

---

##### `catchAllInput`<sup>Optional</sup> <a name="catchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAllInput"></a>

```typescript
public readonly catchAllInput: EventOrchestrationServiceCatchAll;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---

##### `enableEventOrchestrationForServiceInput`<sup>Optional</sup> <a name="enableEventOrchestrationForServiceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForServiceInput"></a>

```typescript
public readonly enableEventOrchestrationForServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.setInput"></a>

```typescript
public readonly setInput: IResolvable | EventOrchestrationServiceSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]

---

##### `enableEventOrchestrationForService`<sup>Required</sup> <a name="enableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForService"></a>

```typescript
public readonly enableEventOrchestrationForService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationServiceCatchAll <a name="EventOrchestrationServiceCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAll: eventOrchestrationService.EventOrchestrationServiceCatchAll = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | actions block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.property.actions"></a>

```typescript
public readonly actions: EventOrchestrationServiceCatchAllActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#actions EventOrchestrationService#actions}

---

### EventOrchestrationServiceCatchAllActions <a name="EventOrchestrationServiceCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActions: eventOrchestrationService.EventOrchestrationServiceCatchAllActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.annotate">annotate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.extraction">extraction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | pagerduty_automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.priority">priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.routeTo">routeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suppress">suppress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suspend">suspend</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.variable">variable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]</code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.annotate"></a>

```typescript
public readonly annotate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.automationAction"></a>

```typescript
public readonly automationAction: EventOrchestrationServiceCatchAllActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#automation_action EventOrchestrationService#automation_action}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.extraction"></a>

```typescript
public readonly extraction: IResolvable | EventOrchestrationServiceCatchAllActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#extraction EventOrchestrationService#extraction}

---

##### `pagerdutyAutomationAction`<sup>Optional</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.pagerdutyAutomationAction"></a>

```typescript
public readonly pagerdutyAutomationAction: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

pagerduty_automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.routeTo"></a>

```typescript
public readonly routeTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suppress"></a>

```typescript
public readonly suppress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suspend"></a>

```typescript
public readonly suspend: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.variable"></a>

```typescript
public readonly variable: IResolvable | EventOrchestrationServiceCatchAllActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#variable EventOrchestrationService#variable}

---

### EventOrchestrationServiceCatchAllActionsAutomationAction <a name="EventOrchestrationServiceCatchAllActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsAutomationAction: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#url EventOrchestrationService#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]</code> | parameter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#url EventOrchestrationService#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.autoSend"></a>

```typescript
public readonly autoSend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.header"></a>

```typescript
public readonly header: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#header EventOrchestrationService#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#parameter EventOrchestrationService#parameter}

---

### EventOrchestrationServiceCatchAllActionsAutomationActionHeader <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsAutomationActionHeader: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceCatchAllActionsAutomationActionParameter <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsAutomationActionParameter: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceCatchAllActionsExtraction <a name="EventOrchestrationServiceCatchAllActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsExtraction: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#target EventOrchestrationService#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#source EventOrchestrationService#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#template EventOrchestrationService#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#target EventOrchestrationService#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#source EventOrchestrationService#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#template EventOrchestrationService#template}.

---

### EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction <a name="EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.property.actionId">actionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}.

---

### EventOrchestrationServiceCatchAllActionsVariable <a name="EventOrchestrationServiceCatchAllActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCatchAllActionsVariable: eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#path EventOrchestrationService#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#type EventOrchestrationService#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#path EventOrchestrationService#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#type EventOrchestrationService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceConfig <a name="EventOrchestrationServiceConfig" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceConfig: eventOrchestrationService.EventOrchestrationServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#service EventOrchestrationService#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.set">set</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]</code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.enableEventOrchestrationForService">enableEventOrchestrationForService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#id EventOrchestrationService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.catchAll"></a>

```typescript
public readonly catchAll: EventOrchestrationServiceCatchAll;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#catch_all EventOrchestrationService#catch_all}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#service EventOrchestrationService#service}.

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.set"></a>

```typescript
public readonly set: IResolvable | EventOrchestrationServiceSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#set EventOrchestrationService#set}

---

##### `enableEventOrchestrationForService`<sup>Optional</sup> <a name="enableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.enableEventOrchestrationForService"></a>

```typescript
public readonly enableEventOrchestrationForService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#id EventOrchestrationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationServiceSet <a name="EventOrchestrationServiceSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSet: eventOrchestrationService.EventOrchestrationServiceSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#id EventOrchestrationService#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]</code> | rule block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#id EventOrchestrationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.rule"></a>

```typescript
public readonly rule: IResolvable | EventOrchestrationServiceSetRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#rule EventOrchestrationService#rule}

---

### EventOrchestrationServiceSetRule <a name="EventOrchestrationServiceSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRule: eventOrchestrationService.EventOrchestrationServiceSetRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#disabled EventOrchestrationService#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#label EventOrchestrationService#label}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.actions"></a>

```typescript
public readonly actions: EventOrchestrationServiceSetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#actions EventOrchestrationService#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.condition"></a>

```typescript
public readonly condition: IResolvable | EventOrchestrationServiceSetRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#condition EventOrchestrationService#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#disabled EventOrchestrationService#disabled}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#label EventOrchestrationService#label}.

---

### EventOrchestrationServiceSetRuleActions <a name="EventOrchestrationServiceSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActions: eventOrchestrationService.EventOrchestrationServiceSetRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.annotate">annotate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.extraction">extraction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | pagerduty_automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.priority">priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.routeTo">routeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suppress">suppress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suspend">suspend</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.variable">variable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]</code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.annotate"></a>

```typescript
public readonly annotate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.automationAction"></a>

```typescript
public readonly automationAction: EventOrchestrationServiceSetRuleActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#automation_action EventOrchestrationService#automation_action}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.extraction"></a>

```typescript
public readonly extraction: IResolvable | EventOrchestrationServiceSetRuleActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#extraction EventOrchestrationService#extraction}

---

##### `pagerdutyAutomationAction`<sup>Optional</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.pagerdutyAutomationAction"></a>

```typescript
public readonly pagerdutyAutomationAction: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

pagerduty_automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.routeTo"></a>

```typescript
public readonly routeTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suppress"></a>

```typescript
public readonly suppress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suspend"></a>

```typescript
public readonly suspend: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.variable"></a>

```typescript
public readonly variable: IResolvable | EventOrchestrationServiceSetRuleActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#variable EventOrchestrationService#variable}

---

### EventOrchestrationServiceSetRuleActionsAutomationAction <a name="EventOrchestrationServiceSetRuleActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsAutomationAction: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#url EventOrchestrationService#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]</code> | parameter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#url EventOrchestrationService#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.autoSend"></a>

```typescript
public readonly autoSend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.header"></a>

```typescript
public readonly header: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#header EventOrchestrationService#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#parameter EventOrchestrationService#parameter}

---

### EventOrchestrationServiceSetRuleActionsAutomationActionHeader <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsAutomationActionHeader: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleActionsAutomationActionParameter <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsAutomationActionParameter: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleActionsExtraction <a name="EventOrchestrationServiceSetRuleActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsExtraction: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#target EventOrchestrationService#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#source EventOrchestrationService#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#template EventOrchestrationService#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#target EventOrchestrationService#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#source EventOrchestrationService#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#template EventOrchestrationService#template}.

---

### EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction <a name="EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.property.actionId">actionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}.

---

### EventOrchestrationServiceSetRuleActionsVariable <a name="EventOrchestrationServiceSetRuleActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleActionsVariable: eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#path EventOrchestrationService#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#type EventOrchestrationService#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#path EventOrchestrationService#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#type EventOrchestrationService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleCondition <a name="EventOrchestrationServiceSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceSetRuleCondition: eventOrchestrationService.EventOrchestrationServiceSetRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#expression EventOrchestrationService#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/event_orchestration_service#expression EventOrchestrationService#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]

---


### EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetAutoSend"></a>

```typescript
public resetAutoSend(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList">EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList">EventOrchestrationServiceCatchAllActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.header"></a>

```typescript
public readonly header: EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList">EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameter"></a>

```typescript
public readonly parameter: EventOrchestrationServiceCatchAllActionsAutomationActionParameterList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList">EventOrchestrationServiceCatchAllActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSendInput"></a>

```typescript
public readonly autoSendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSend"></a>

```typescript
public readonly autoSend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceCatchAllActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionParameterList <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>[]

---


### EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsAutomationActionParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>

---


### EventOrchestrationServiceCatchAllActionsExtractionList <a name="EventOrchestrationServiceCatchAllActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceCatchAllActionsExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]

---


### EventOrchestrationServiceCatchAllActionsExtractionOutputReference <a name="EventOrchestrationServiceCatchAllActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetTemplate"></a>

```typescript
public resetTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsExtraction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>

---


### EventOrchestrationServiceCatchAllActionsOutputReference <a name="EventOrchestrationServiceCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction">putPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPagerdutyAutomationAction">resetPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction"></a>

```typescript
public putAutomationAction(value: EventOrchestrationServiceCatchAllActionsAutomationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction"></a>

```typescript
public putExtraction(value: IResolvable | EventOrchestrationServiceCatchAllActionsExtraction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]

---

##### `putPagerdutyAutomationAction` <a name="putPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction"></a>

```typescript
public putPagerdutyAutomationAction(value: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable"></a>

```typescript
public putVariable(value: IResolvable | EventOrchestrationServiceCatchAllActionsVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAnnotate"></a>

```typescript
public resetAnnotate(): void
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAutomationAction"></a>

```typescript
public resetAutomationAction(): void
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetExtraction"></a>

```typescript
public resetExtraction(): void
```

##### `resetPagerdutyAutomationAction` <a name="resetPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPagerdutyAutomationAction"></a>

```typescript
public resetPagerdutyAutomationAction(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetRouteTo"></a>

```typescript
public resetRouteTo(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuppress"></a>

```typescript
public resetSuppress(): void
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuspend"></a>

```typescript
public resetSuspend(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetVariable"></a>

```typescript
public resetVariable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList">EventOrchestrationServiceCatchAllActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList">EventOrchestrationServiceCatchAllActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationActionInput">pagerdutyAutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variableInput">variableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotate">annotate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeTo">routeTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppress">suppress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspend">suspend</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationAction"></a>

```typescript
public readonly automationAction: EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extraction"></a>

```typescript
public readonly extraction: EventOrchestrationServiceCatchAllActionsExtractionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList">EventOrchestrationServiceCatchAllActionsExtractionList</a>

---

##### `pagerdutyAutomationAction`<sup>Required</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationAction"></a>

```typescript
public readonly pagerdutyAutomationAction: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variable"></a>

```typescript
public readonly variable: EventOrchestrationServiceCatchAllActionsVariableList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList">EventOrchestrationServiceCatchAllActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotateInput"></a>

```typescript
public readonly annotateInput: string;
```

- *Type:* string

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationActionInput"></a>

```typescript
public readonly automationActionInput: EventOrchestrationServiceCatchAllActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extractionInput"></a>

```typescript
public readonly extractionInput: IResolvable | EventOrchestrationServiceCatchAllActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>[]

---

##### `pagerdutyAutomationActionInput`<sup>Optional</sup> <a name="pagerdutyAutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationActionInput"></a>

```typescript
public readonly pagerdutyAutomationActionInput: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeToInput"></a>

```typescript
public readonly routeToInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppressInput"></a>

```typescript
public readonly suppressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: number;
```

- *Type:* number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: IResolvable | EventOrchestrationServiceCatchAllActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotate"></a>

```typescript
public readonly annotate: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeTo"></a>

```typescript
public readonly routeTo: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppress"></a>

```typescript
public readonly suppress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspend"></a>

```typescript
public readonly suspend: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceCatchAllActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---


### EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference <a name="EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionIdInput"></a>

```typescript
public readonly actionIdInput: string;
```

- *Type:* string

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---


### EventOrchestrationServiceCatchAllActionsVariableList <a name="EventOrchestrationServiceCatchAllActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceCatchAllActionsVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>[]

---


### EventOrchestrationServiceCatchAllActionsVariableOutputReference <a name="EventOrchestrationServiceCatchAllActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCatchAllActionsVariable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>

---


### EventOrchestrationServiceCatchAllOutputReference <a name="EventOrchestrationServiceCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions"></a>

```typescript
public putActions(value: EventOrchestrationServiceCatchAllActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference">EventOrchestrationServiceCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actions"></a>

```typescript
public readonly actions: EventOrchestrationServiceCatchAllActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference">EventOrchestrationServiceCatchAllActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: EventOrchestrationServiceCatchAllActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceCatchAll;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---


### EventOrchestrationServiceSetList <a name="EventOrchestrationServiceSetList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>[]

---


### EventOrchestrationServiceSetOutputReference <a name="EventOrchestrationServiceSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | EventOrchestrationServiceSetRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]

---

##### `resetRule` <a name="resetRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList">EventOrchestrationServiceSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.rule"></a>

```typescript
public readonly rule: EventOrchestrationServiceSetRuleList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList">EventOrchestrationServiceSetRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | EventOrchestrationServiceSetRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]

---


### EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetAutoSend"></a>

```typescript
public resetAutoSend(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList">EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList">EventOrchestrationServiceSetRuleActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.header"></a>

```typescript
public readonly header: EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList">EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameter"></a>

```typescript
public readonly parameter: EventOrchestrationServiceSetRuleActionsAutomationActionParameterList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList">EventOrchestrationServiceSetRuleActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSendInput"></a>

```typescript
public readonly autoSendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSend"></a>

```typescript
public readonly autoSend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceSetRuleActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionParameterList <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>[]

---


### EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsAutomationActionParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>

---


### EventOrchestrationServiceSetRuleActionsExtractionList <a name="EventOrchestrationServiceSetRuleActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleActionsExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]

---


### EventOrchestrationServiceSetRuleActionsExtractionOutputReference <a name="EventOrchestrationServiceSetRuleActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetTemplate"></a>

```typescript
public resetTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsExtraction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>

---


### EventOrchestrationServiceSetRuleActionsOutputReference <a name="EventOrchestrationServiceSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction">putPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPagerdutyAutomationAction">resetPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction"></a>

```typescript
public putAutomationAction(value: EventOrchestrationServiceSetRuleActionsAutomationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction"></a>

```typescript
public putExtraction(value: IResolvable | EventOrchestrationServiceSetRuleActionsExtraction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]

---

##### `putPagerdutyAutomationAction` <a name="putPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction"></a>

```typescript
public putPagerdutyAutomationAction(value: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable"></a>

```typescript
public putVariable(value: IResolvable | EventOrchestrationServiceSetRuleActionsVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAnnotate"></a>

```typescript
public resetAnnotate(): void
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAutomationAction"></a>

```typescript
public resetAutomationAction(): void
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetExtraction"></a>

```typescript
public resetExtraction(): void
```

##### `resetPagerdutyAutomationAction` <a name="resetPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPagerdutyAutomationAction"></a>

```typescript
public resetPagerdutyAutomationAction(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetRouteTo"></a>

```typescript
public resetRouteTo(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuppress"></a>

```typescript
public resetSuppress(): void
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuspend"></a>

```typescript
public resetSuspend(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetVariable"></a>

```typescript
public resetVariable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList">EventOrchestrationServiceSetRuleActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList">EventOrchestrationServiceSetRuleActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationActionInput">pagerdutyAutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variableInput">variableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotate">annotate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeTo">routeTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppress">suppress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspend">suspend</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationAction"></a>

```typescript
public readonly automationAction: EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extraction"></a>

```typescript
public readonly extraction: EventOrchestrationServiceSetRuleActionsExtractionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList">EventOrchestrationServiceSetRuleActionsExtractionList</a>

---

##### `pagerdutyAutomationAction`<sup>Required</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationAction"></a>

```typescript
public readonly pagerdutyAutomationAction: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variable"></a>

```typescript
public readonly variable: EventOrchestrationServiceSetRuleActionsVariableList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList">EventOrchestrationServiceSetRuleActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotateInput"></a>

```typescript
public readonly annotateInput: string;
```

- *Type:* string

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationActionInput"></a>

```typescript
public readonly automationActionInput: EventOrchestrationServiceSetRuleActionsAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extractionInput"></a>

```typescript
public readonly extractionInput: IResolvable | EventOrchestrationServiceSetRuleActionsExtraction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>[]

---

##### `pagerdutyAutomationActionInput`<sup>Optional</sup> <a name="pagerdutyAutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationActionInput"></a>

```typescript
public readonly pagerdutyAutomationActionInput: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeToInput"></a>

```typescript
public readonly routeToInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppressInput"></a>

```typescript
public readonly suppressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: number;
```

- *Type:* number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: IResolvable | EventOrchestrationServiceSetRuleActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotate"></a>

```typescript
public readonly annotate: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeTo"></a>

```typescript
public readonly routeTo: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppress"></a>

```typescript
public readonly suppress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspend"></a>

```typescript
public readonly suspend: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceSetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---


### EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference <a name="EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionIdInput"></a>

```typescript
public readonly actionIdInput: string;
```

- *Type:* string

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---


### EventOrchestrationServiceSetRuleActionsVariableList <a name="EventOrchestrationServiceSetRuleActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleActionsVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>[]

---


### EventOrchestrationServiceSetRuleActionsVariableOutputReference <a name="EventOrchestrationServiceSetRuleActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleActionsVariable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>

---


### EventOrchestrationServiceSetRuleConditionList <a name="EventOrchestrationServiceSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]

---


### EventOrchestrationServiceSetRuleConditionOutputReference <a name="EventOrchestrationServiceSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>

---


### EventOrchestrationServiceSetRuleList <a name="EventOrchestrationServiceSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceSetRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>[]

---


### EventOrchestrationServiceSetRuleOutputReference <a name="EventOrchestrationServiceSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationService } from '@cdktf/provider-pagerduty'

new eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions"></a>

```typescript
public putActions(value: EventOrchestrationServiceSetRuleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | EventOrchestrationServiceSetRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference">EventOrchestrationServiceSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList">EventOrchestrationServiceSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actions"></a>

```typescript
public readonly actions: EventOrchestrationServiceSetRuleActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference">EventOrchestrationServiceSetRuleActionsOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: EventOrchestrationServiceSetRuleConditionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList">EventOrchestrationServiceSetRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: EventOrchestrationServiceSetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | EventOrchestrationServiceSetRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceSetRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>

---



