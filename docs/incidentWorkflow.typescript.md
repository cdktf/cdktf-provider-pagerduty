# `incidentWorkflow` Submodule <a name="`incidentWorkflow` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflow <a name="IncidentWorkflow" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow pagerduty_incident_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflow(scope: Construct, id: string, config: IncidentWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig">IncidentWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig">IncidentWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam">resetTeam</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStep` <a name="putStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep"></a>

```typescript
public putStep(value: IResolvable | IncidentWorkflowStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep"></a>

```typescript
public resetStep(): void
```

##### `resetTeam` <a name="resetTeam" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam"></a>

```typescript
public resetTeam(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

incidentWorkflow.IncidentWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

incidentWorkflow.IncidentWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

incidentWorkflow.IncidentWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

incidentWorkflow.IncidentWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput">stepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput">teamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team">team</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step"></a>

```typescript
public readonly step: IncidentWorkflowStepList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput"></a>

```typescript
public readonly stepInput: IResolvable | IncidentWorkflowStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowConfig <a name="IncidentWorkflowConfig" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowConfig: incidentWorkflow.IncidentWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step">step</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]</code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team">team</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step"></a>

```typescript
public readonly step: IResolvable | IncidentWorkflowStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

### IncidentWorkflowStep <a name="IncidentWorkflowStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowStep: incidentWorkflow.IncidentWorkflowStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput">inlineStepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]</code> | inline_steps_input block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input">input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]</code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `inlineStepsInput`<sup>Optional</sup> <a name="inlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput"></a>

```typescript
public readonly inlineStepsInput: IResolvable | IncidentWorkflowStepInlineStepsInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]

inline_steps_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#inline_steps_input IncidentWorkflow#inline_steps_input}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input"></a>

```typescript
public readonly input: IResolvable | IncidentWorkflowStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInput <a name="IncidentWorkflowStepInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowStepInlineStepsInput: incidentWorkflow.IncidentWorkflowStepInlineStepsInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step">step</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]</code> | step block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step"></a>

```typescript
public readonly step: IResolvable | IncidentWorkflowStepInlineStepsInputStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

### IncidentWorkflowStepInlineStepsInputStep <a name="IncidentWorkflowStepInlineStepsInputStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowStepInlineStepsInputStep: incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input">input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]</code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input"></a>

```typescript
public readonly input: IResolvable | IncidentWorkflowStepInlineStepsInputStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInputStepInput <a name="IncidentWorkflowStepInlineStepsInputStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowStepInlineStepsInputStepInput: incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

### IncidentWorkflowStepInput <a name="IncidentWorkflowStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

const incidentWorkflowStepInput: incidentWorkflow.IncidentWorkflowStepInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.12.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowStepInlineStepsInputList <a name="IncidentWorkflowStepInlineStepsInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get"></a>

```typescript
public get(index: number): IncidentWorkflowStepInlineStepsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]

---


### IncidentWorkflowStepInlineStepsInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep">resetStep</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStep` <a name="putStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep"></a>

```typescript
public putStep(value: IResolvable | IncidentWorkflowStepInlineStepsInputStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]

---

##### `resetStep` <a name="resetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep"></a>

```typescript
public resetStep(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput">stepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step"></a>

```typescript
public readonly step: IncidentWorkflowStepInlineStepsInputStepList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput"></a>

```typescript
public readonly stepInput: IResolvable | IncidentWorkflowStepInlineStepsInputStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>

---


### IncidentWorkflowStepInlineStepsInputStepInputList <a name="IncidentWorkflowStepInlineStepsInputStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get"></a>

```typescript
public get(index: number): IncidentWorkflowStepInlineStepsInputStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInputStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]

---


### IncidentWorkflowStepInlineStepsInputStepInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated">generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated"></a>

```typescript
public readonly generated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInputStepInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>

---


### IncidentWorkflowStepInlineStepsInputStepList <a name="IncidentWorkflowStepInlineStepsInputStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get"></a>

```typescript
public get(index: number): IncidentWorkflowStepInlineStepsInputStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInputStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>[]

---


### IncidentWorkflowStepInlineStepsInputStepOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput">resetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput"></a>

```typescript
public putInput(value: IResolvable | IncidentWorkflowStepInlineStepsInputStepInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]

---

##### `resetInput` <a name="resetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput">inputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input"></a>

```typescript
public readonly input: IncidentWorkflowStepInlineStepsInputStepInputList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | IncidentWorkflowStepInlineStepsInputStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInlineStepsInputStep;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>

---


### IncidentWorkflowStepInputList <a name="IncidentWorkflowStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get"></a>

```typescript
public get(index: number): IncidentWorkflowStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]

---


### IncidentWorkflowStepInputOutputReference <a name="IncidentWorkflowStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated">generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated"></a>

```typescript
public readonly generated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStepInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>

---


### IncidentWorkflowStepList <a name="IncidentWorkflowStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get"></a>

```typescript
public get(index: number): IncidentWorkflowStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>[]

---


### IncidentWorkflowStepOutputReference <a name="IncidentWorkflowStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer"></a>

```typescript
import { incidentWorkflow } from '@cdktf/provider-pagerduty'

new incidentWorkflow.IncidentWorkflowStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput">putInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput">resetInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput">resetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInlineStepsInput` <a name="putInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput"></a>

```typescript
public putInlineStepsInput(value: IResolvable | IncidentWorkflowStepInlineStepsInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]

---

##### `putInput` <a name="putInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput"></a>

```typescript
public putInput(value: IResolvable | IncidentWorkflowStepInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]

---

##### `resetInlineStepsInput` <a name="resetInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput"></a>

```typescript
public resetInlineStepsInput(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput">inlineStepsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput">inlineStepsInputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput">inputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inlineStepsInput`<sup>Required</sup> <a name="inlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput"></a>

```typescript
public readonly inlineStepsInput: IncidentWorkflowStepInlineStepsInputList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input"></a>

```typescript
public readonly input: IncidentWorkflowStepInputList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `inlineStepsInputInput`<sup>Optional</sup> <a name="inlineStepsInputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput"></a>

```typescript
public readonly inlineStepsInputInput: IResolvable | IncidentWorkflowStepInlineStepsInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>[]

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | IncidentWorkflowStepInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentWorkflowStep;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>

---



