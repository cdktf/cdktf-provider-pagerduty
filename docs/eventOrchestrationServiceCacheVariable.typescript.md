# `eventOrchestrationServiceCacheVariable` Submodule <a name="`eventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationServiceCacheVariable <a name="EventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable(scope: Construct, id: string, config: EventOrchestrationServiceCacheVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig">EventOrchestrationServiceCacheVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig">EventOrchestrationServiceCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition"></a>

```typescript
public putCondition(value: IResolvable | EventOrchestrationServiceCacheVariableCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration"></a>

```typescript
public putConfiguration(value: EventOrchestrationServiceCacheVariableConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventOrchestrationServiceCacheVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition"></a>

```typescript
public readonly condition: EventOrchestrationServiceCacheVariableConditionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration"></a>

```typescript
public readonly configuration: EventOrchestrationServiceCacheVariableConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | EventOrchestrationServiceCacheVariableCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput"></a>

```typescript
public readonly configurationInput: EventOrchestrationServiceCacheVariableConfiguration;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationServiceCacheVariableCondition <a name="EventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCacheVariableCondition: eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}.

---

### EventOrchestrationServiceCacheVariableConfig <a name="EventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCacheVariableConfig: eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration"></a>

```typescript
public readonly configuration: EventOrchestrationServiceCacheVariableConfiguration;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#configuration EventOrchestrationServiceCacheVariable#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | EventOrchestrationServiceCacheVariableCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#condition EventOrchestrationServiceCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}.

---

### EventOrchestrationServiceCacheVariableConfiguration <a name="EventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const eventOrchestrationServiceCacheVariableConfiguration: eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds">ttlSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}.

---

##### `ttlSeconds`<sup>Optional</sup> <a name="ttlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds"></a>

```typescript
public readonly ttlSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationServiceCacheVariableConditionList <a name="EventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get"></a>

```typescript
public get(index: number): EventOrchestrationServiceCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCacheVariableCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>[]

---


### EventOrchestrationServiceCacheVariableConditionOutputReference <a name="EventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventOrchestrationServiceCacheVariableCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>

---


### EventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="EventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```typescript
import { eventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds">resetTtlSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTtlSeconds` <a name="resetTtlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds"></a>

```typescript
public resetTtlSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput">ttlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">ttlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `ttlSecondsInput`<sup>Optional</sup> <a name="ttlSecondsInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput"></a>

```typescript
public readonly ttlSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `ttlSeconds`<sup>Required</sup> <a name="ttlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```typescript
public readonly ttlSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventOrchestrationServiceCacheVariableConfiguration;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---



