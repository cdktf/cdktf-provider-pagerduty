# `incidentWorkflowTrigger` Submodule <a name="`incidentWorkflowTrigger` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflowTrigger <a name="IncidentWorkflowTrigger" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger pagerduty_incident_workflow_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

new incidentWorkflowTrigger.IncidentWorkflowTrigger(scope: Construct, id: string, config: IncidentWorkflowTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices">resetServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions"></a>

```typescript
public putPermissions(value: IncidentWorkflowTriggerPermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices"></a>

```typescript
public resetServices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentWorkflowTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IncidentWorkflowTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentWorkflowTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentWorkflowTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentWorkflowTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference">IncidentWorkflowTriggerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput">subscribedToAllServicesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput">workflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices">subscribedToAllServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow">workflow</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissions"></a>

```typescript
public readonly permissions: IncidentWorkflowTriggerPermissionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference">IncidentWorkflowTriggerPermissionsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IncidentWorkflowTriggerPermissions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `subscribedToAllServicesInput`<sup>Optional</sup> <a name="subscribedToAllServicesInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput"></a>

```typescript
public readonly subscribedToAllServicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput"></a>

```typescript
public readonly workflowInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `subscribedToAllServices`<sup>Required</sup> <a name="subscribedToAllServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices"></a>

```typescript
public readonly subscribedToAllServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowTriggerConfig <a name="IncidentWorkflowTriggerConfig" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.Initializer"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

const incidentWorkflowTriggerConfig: incidentWorkflowTrigger.IncidentWorkflowTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices">subscribedToAllServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow">workflow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services">services</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subscribedToAllServices`<sup>Required</sup> <a name="subscribedToAllServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices"></a>

```typescript
public readonly subscribedToAllServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}.

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.permissions"></a>

```typescript
public readonly permissions: IncidentWorkflowTriggerPermissions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#permissions IncidentWorkflowTrigger#permissions}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}.

---

### IncidentWorkflowTriggerPermissions <a name="IncidentWorkflowTriggerPermissions" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.Initializer"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

const incidentWorkflowTriggerPermissions: incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.restricted">restricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#restricted IncidentWorkflowTrigger#restricted}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#team_id IncidentWorkflowTrigger#team_id}. |

---

##### `restricted`<sup>Optional</sup> <a name="restricted" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.restricted"></a>

```typescript
public readonly restricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#restricted IncidentWorkflowTrigger#restricted}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/resources/incident_workflow_trigger#team_id IncidentWorkflowTrigger#team_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowTriggerPermissionsOutputReference <a name="IncidentWorkflowTriggerPermissionsOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer"></a>

```typescript
import { incidentWorkflowTrigger } from '@cdktf/provider-pagerduty'

new incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetRestricted">resetRestricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetTeamId">resetTeamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestricted` <a name="resetRestricted" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetRestricted"></a>

```typescript
public resetRestricted(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetTeamId"></a>

```typescript
public resetTeamId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restrictedInput">restrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restricted">restricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restrictedInput`<sup>Optional</sup> <a name="restrictedInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restrictedInput"></a>

```typescript
public readonly restrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `restricted`<sup>Required</sup> <a name="restricted" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restricted"></a>

```typescript
public readonly restricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IncidentWorkflowTriggerPermissions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---



