# `rulesetRule` Submodule <a name="`rulesetRule` Submodule" id="@cdktf/provider-pagerduty.rulesetRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RulesetRule <a name="RulesetRule" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule pagerduty_ruleset_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRule(scope: Construct, id: string, config: RulesetRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig">RulesetRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig">RulesetRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame">putTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetCatchAll">resetCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetTimeFrame">resetTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions"></a>

```typescript
public putActions(value: RulesetRuleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions"></a>

```typescript
public putConditions(value: RulesetRuleConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `putTimeFrame` <a name="putTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame"></a>

```typescript
public putTimeFrame(value: RulesetRuleTimeFrame): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable"></a>

```typescript
public putVariable(value: IResolvable | RulesetRuleVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetCatchAll` <a name="resetCatchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetCatchAll"></a>

```typescript
public resetCatchAll(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetTimeFrame` <a name="resetTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetTimeFrame"></a>

```typescript
public resetTimeFrame(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetVariable"></a>

```typescript
public resetVariable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RulesetRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

rulesetRule.RulesetRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

rulesetRule.RulesetRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

rulesetRule.RulesetRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

rulesetRule.RulesetRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RulesetRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RulesetRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RulesetRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RulesetRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame">timeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput">catchAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput">rulesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput">timeFrameInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput">variableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll">catchAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset">ruleset</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions"></a>

```typescript
public readonly actions: RulesetRuleActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions"></a>

```typescript
public readonly conditions: RulesetRuleConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a>

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame"></a>

```typescript
public readonly timeFrame: RulesetRuleTimeFrameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable"></a>

```typescript
public readonly variable: RulesetRuleVariableList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: RulesetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `catchAllInput`<sup>Optional</sup> <a name="catchAllInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput"></a>

```typescript
public readonly catchAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: RulesetRuleConditions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput"></a>

```typescript
public readonly rulesetInput: string;
```

- *Type:* string

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: RulesetRuleTimeFrame;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput"></a>

```typescript
public readonly variableInput: IResolvable | RulesetRuleVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll"></a>

```typescript
public readonly catchAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetRuleActions <a name="RulesetRuleActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActions: rulesetRule.RulesetRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate">annotate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]</code> | annotate block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction">eventAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]</code> | event_action block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions">extractions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]</code> | extractions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority">priority</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]</code> | priority block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]</code> | route block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity">severity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]</code> | severity block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress">suppress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]</code> | suppress block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend">suspend</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]</code> | suspend block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate"></a>

```typescript
public readonly annotate: IResolvable | RulesetRuleActionsAnnotate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]

annotate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#annotate RulesetRule#annotate}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction"></a>

```typescript
public readonly eventAction: IResolvable | RulesetRuleActionsEventAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]

event_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#event_action RulesetRule#event_action}

---

##### `extractions`<sup>Optional</sup> <a name="extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions"></a>

```typescript
public readonly extractions: IResolvable | RulesetRuleActionsExtractions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]

extractions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#extractions RulesetRule#extractions}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority"></a>

```typescript
public readonly priority: IResolvable | RulesetRuleActionsPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]

priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#priority RulesetRule#priority}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route"></a>

```typescript
public readonly route: IResolvable | RulesetRuleActionsRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#route RulesetRule#route}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity"></a>

```typescript
public readonly severity: IResolvable | RulesetRuleActionsSeverity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#severity RulesetRule#severity}

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress"></a>

```typescript
public readonly suppress: IResolvable | RulesetRuleActionsSuppress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]

suppress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#suppress RulesetRule#suppress}

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend"></a>

```typescript
public readonly suspend: IResolvable | RulesetRuleActionsSuspend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]

suspend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#suspend RulesetRule#suspend}

---

### RulesetRuleActionsAnnotate <a name="RulesetRuleActionsAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsAnnotate: rulesetRule.RulesetRuleActionsAnnotate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsEventAction <a name="RulesetRuleActionsEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsEventAction: rulesetRule.RulesetRuleActionsEventAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsExtractions <a name="RulesetRuleActionsExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsExtractions: rulesetRule.RulesetRuleActionsExtractions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#regex RulesetRule#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#source RulesetRule#source}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#target RulesetRule#target}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#template RulesetRule#template}. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#regex RulesetRule#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#source RulesetRule#source}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#target RulesetRule#target}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#template RulesetRule#template}.

---

### RulesetRuleActionsPriority <a name="RulesetRuleActionsPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsPriority: rulesetRule.RulesetRuleActionsPriority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsRoute <a name="RulesetRuleActionsRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsRoute: rulesetRule.RulesetRuleActionsRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSeverity <a name="RulesetRuleActionsSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSeverity: rulesetRule.RulesetRuleActionsSeverity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuppress <a name="RulesetRuleActionsSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSuppress: rulesetRule.RulesetRuleActionsSuppress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount">thresholdTimeAmount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit">thresholdTimeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `thresholdTimeAmount`<sup>Optional</sup> <a name="thresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount"></a>

```typescript
public readonly thresholdTimeAmount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}.

---

##### `thresholdTimeUnit`<sup>Optional</sup> <a name="thresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit"></a>

```typescript
public readonly thresholdTimeUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}.

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuspend <a name="RulesetRuleActionsSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSuspend: rulesetRule.RulesetRuleActionsSuspend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConditions <a name="RulesetRuleConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleConditions: rulesetRule.RulesetRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions">subconditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]</code> | subconditions block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `subconditions`<sup>Optional</sup> <a name="subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions"></a>

```typescript
public readonly subconditions: IResolvable | RulesetRuleConditionsSubconditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]

subconditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#subconditions RulesetRule#subconditions}

---

### RulesetRuleConditionsSubconditions <a name="RulesetRuleConditionsSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleConditionsSubconditions: rulesetRule.RulesetRuleConditionsSubconditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]</code> | parameter block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | RulesetRuleConditionsSubconditionsParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#parameter RulesetRule#parameter}

---

### RulesetRuleConditionsSubconditionsParameter <a name="RulesetRuleConditionsSubconditionsParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleConditionsSubconditionsParameter: rulesetRule.RulesetRuleConditionsSubconditionsParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConfig <a name="RulesetRuleConfig" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleConfig: rulesetRule.RulesetRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset">ruleset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll">catchAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#disabled RulesetRule#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#id RulesetRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#position RulesetRule#position}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame">timeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | time_frame block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable">variable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]</code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions"></a>

```typescript
public readonly actions: RulesetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#actions RulesetRule#actions}

---

##### `catchAll`<sup>Optional</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll"></a>

```typescript
public readonly catchAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: RulesetRuleConditions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#conditions RulesetRule#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#disabled RulesetRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#id RulesetRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#position RulesetRule#position}.

---

##### `timeFrame`<sup>Optional</sup> <a name="timeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame"></a>

```typescript
public readonly timeFrame: RulesetRuleTimeFrame;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

time_frame block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#time_frame RulesetRule#time_frame}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable"></a>

```typescript
public readonly variable: IResolvable | RulesetRuleVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#variable RulesetRule#variable}

---

### RulesetRuleTimeFrame <a name="RulesetRuleTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrame: rulesetRule.RulesetRuleTimeFrame = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween">activeBetween</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]</code> | active_between block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly">scheduledWeekly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]</code> | scheduled_weekly block. |

---

##### `activeBetween`<sup>Optional</sup> <a name="activeBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween"></a>

```typescript
public readonly activeBetween: IResolvable | RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]

active_between block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#active_between RulesetRule#active_between}

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="scheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: IResolvable | RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]

scheduled_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#scheduled_weekly RulesetRule#scheduled_weekly}

---

### RulesetRuleTimeFrameActiveBetween <a name="RulesetRuleTimeFrameActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrameActiveBetween: rulesetRule.RulesetRuleTimeFrameActiveBetween = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime">endTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#end_time RulesetRule#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#end_time RulesetRule#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

### RulesetRuleTimeFrameScheduledWeekly <a name="RulesetRuleTimeFrameScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrameScheduledWeekly: rulesetRule.RulesetRuleTimeFrameScheduledWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#duration RulesetRule#duration}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#timezone RulesetRule#timezone}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays">weekdays</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#duration RulesetRule#duration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#timezone RulesetRule#timezone}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}.

---

### RulesetRuleVariable <a name="RulesetRuleVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleVariable: rulesetRule.RulesetRuleVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#name RulesetRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#type RulesetRule#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#name RulesetRule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | RulesetRuleVariableParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#parameters RulesetRule#parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#type RulesetRule#type}.

---

### RulesetRuleVariableParameters <a name="RulesetRuleVariableParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

const rulesetRuleVariableParameters: rulesetRule.RulesetRuleVariableParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/ruleset_rule#value RulesetRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRuleActionsAnnotateList <a name="RulesetRuleActionsAnnotateList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsAnnotateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsAnnotateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsAnnotate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]

---


### RulesetRuleActionsAnnotateOutputReference <a name="RulesetRuleActionsAnnotateOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsAnnotateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsAnnotate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>

---


### RulesetRuleActionsEventActionList <a name="RulesetRuleActionsEventActionList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsEventActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsEventActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsEventAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]

---


### RulesetRuleActionsEventActionOutputReference <a name="RulesetRuleActionsEventActionOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsEventActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsEventAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>

---


### RulesetRuleActionsExtractionsList <a name="RulesetRuleActionsExtractionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsExtractionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsExtractionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsExtractions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]

---


### RulesetRuleActionsExtractionsOutputReference <a name="RulesetRuleActionsExtractionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsExtractionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTemplate"></a>

```typescript
public resetTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsExtractions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>

---


### RulesetRuleActionsOutputReference <a name="RulesetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate">putAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction">putEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions">putExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority">putPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity">putSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress">putSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend">putSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetExtractions">resetExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotate` <a name="putAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate"></a>

```typescript
public putAnnotate(value: IResolvable | RulesetRuleActionsAnnotate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]

---

##### `putEventAction` <a name="putEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction"></a>

```typescript
public putEventAction(value: IResolvable | RulesetRuleActionsEventAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]

---

##### `putExtractions` <a name="putExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions"></a>

```typescript
public putExtractions(value: IResolvable | RulesetRuleActionsExtractions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]

---

##### `putPriority` <a name="putPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority"></a>

```typescript
public putPriority(value: IResolvable | RulesetRuleActionsPriority[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute"></a>

```typescript
public putRoute(value: IResolvable | RulesetRuleActionsRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity"></a>

```typescript
public putSeverity(value: IResolvable | RulesetRuleActionsSeverity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]

---

##### `putSuppress` <a name="putSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress"></a>

```typescript
public putSuppress(value: IResolvable | RulesetRuleActionsSuppress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]

---

##### `putSuspend` <a name="putSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend"></a>

```typescript
public putSuspend(value: IResolvable | RulesetRuleActionsSuspend[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetAnnotate"></a>

```typescript
public resetAnnotate(): void
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetExtractions` <a name="resetExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetExtractions"></a>

```typescript
public resetExtractions(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuppress"></a>

```typescript
public resetSuppress(): void
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuspend"></a>

```typescript
public resetSuspend(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate">annotate</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction">eventAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions">extractions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority">priority</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress">suppress</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend">suspend</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput">extractionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput">severityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate"></a>

```typescript
public readonly annotate: RulesetRuleActionsAnnotateList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a>

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: RulesetRuleActionsEventActionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a>

---

##### `extractions`<sup>Required</sup> <a name="extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions"></a>

```typescript
public readonly extractions: RulesetRuleActionsExtractionsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority"></a>

```typescript
public readonly priority: RulesetRuleActionsPriorityList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route"></a>

```typescript
public readonly route: RulesetRuleActionsRouteList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity"></a>

```typescript
public readonly severity: RulesetRuleActionsSeverityList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a>

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress"></a>

```typescript
public readonly suppress: RulesetRuleActionsSuppressList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a>

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend"></a>

```typescript
public readonly suspend: RulesetRuleActionsSuspendList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput"></a>

```typescript
public readonly annotateInput: IResolvable | RulesetRuleActionsAnnotate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>[]

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: IResolvable | RulesetRuleActionsEventAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>[]

---

##### `extractionsInput`<sup>Optional</sup> <a name="extractionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput"></a>

```typescript
public readonly extractionsInput: IResolvable | RulesetRuleActionsExtractions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>[]

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: IResolvable | RulesetRuleActionsPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | RulesetRuleActionsRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: IResolvable | RulesetRuleActionsSeverity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput"></a>

```typescript
public readonly suppressInput: IResolvable | RulesetRuleActionsSuppress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: IResolvable | RulesetRuleActionsSuspend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRuleActions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---


### RulesetRuleActionsPriorityList <a name="RulesetRuleActionsPriorityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsPriorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsPriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>[]

---


### RulesetRuleActionsPriorityOutputReference <a name="RulesetRuleActionsPriorityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsPriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsPriority;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>

---


### RulesetRuleActionsRouteList <a name="RulesetRuleActionsRouteList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>[]

---


### RulesetRuleActionsRouteOutputReference <a name="RulesetRuleActionsRouteOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>

---


### RulesetRuleActionsSeverityList <a name="RulesetRuleActionsSeverityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSeverityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSeverity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>[]

---


### RulesetRuleActionsSeverityOutputReference <a name="RulesetRuleActionsSeverityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSeverityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSeverity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>

---


### RulesetRuleActionsSuppressList <a name="RulesetRuleActionsSuppressList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSuppressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsSuppressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSuppress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>[]

---


### RulesetRuleActionsSuppressOutputReference <a name="RulesetRuleActionsSuppressOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSuppressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeAmount">resetThresholdTimeAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeUnit">resetThresholdTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdTimeAmount` <a name="resetThresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeAmount"></a>

```typescript
public resetThresholdTimeAmount(): void
```

##### `resetThresholdTimeUnit` <a name="resetThresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeUnit"></a>

```typescript
public resetThresholdTimeUnit(): void
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdValue"></a>

```typescript
public resetThresholdValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput">thresholdTimeAmountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput">thresholdTimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount">thresholdTimeAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit">thresholdTimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thresholdTimeAmountInput`<sup>Optional</sup> <a name="thresholdTimeAmountInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput"></a>

```typescript
public readonly thresholdTimeAmountInput: number;
```

- *Type:* number

---

##### `thresholdTimeUnitInput`<sup>Optional</sup> <a name="thresholdTimeUnitInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput"></a>

```typescript
public readonly thresholdTimeUnitInput: string;
```

- *Type:* string

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput"></a>

```typescript
public readonly thresholdValueInput: number;
```

- *Type:* number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thresholdTimeAmount`<sup>Required</sup> <a name="thresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount"></a>

```typescript
public readonly thresholdTimeAmount: number;
```

- *Type:* number

---

##### `thresholdTimeUnit`<sup>Required</sup> <a name="thresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit"></a>

```typescript
public readonly thresholdTimeUnit: string;
```

- *Type:* string

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSuppress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>

---


### RulesetRuleActionsSuspendList <a name="RulesetRuleActionsSuspendList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSuspendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get"></a>

```typescript
public get(index: number): RulesetRuleActionsSuspendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSuspend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>[]

---


### RulesetRuleActionsSuspendOutputReference <a name="RulesetRuleActionsSuspendOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleActionsSuspendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleActionsSuspend;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>

---


### RulesetRuleConditionsOutputReference <a name="RulesetRuleConditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions">putSubconditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetSubconditions">resetSubconditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubconditions` <a name="putSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions"></a>

```typescript
public putSubconditions(value: IResolvable | RulesetRuleConditionsSubconditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]

---

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetSubconditions` <a name="resetSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetSubconditions"></a>

```typescript
public resetSubconditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions">subconditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput">subconditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subconditions`<sup>Required</sup> <a name="subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions"></a>

```typescript
public readonly subconditions: RulesetRuleConditionsSubconditionsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `subconditionsInput`<sup>Optional</sup> <a name="subconditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput"></a>

```typescript
public readonly subconditionsInput: IResolvable | RulesetRuleConditionsSubconditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRuleConditions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---


### RulesetRuleConditionsSubconditionsList <a name="RulesetRuleConditionsSubconditionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleConditionsSubconditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get"></a>

```typescript
public get(index: number): RulesetRuleConditionsSubconditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleConditionsSubconditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>[]

---


### RulesetRuleConditionsSubconditionsOutputReference <a name="RulesetRuleConditionsSubconditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleConditionsSubconditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | RulesetRuleConditionsSubconditionsParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]

---

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter"></a>

```typescript
public readonly parameter: RulesetRuleConditionsSubconditionsParameterList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | RulesetRuleConditionsSubconditionsParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleConditionsSubconditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>

---


### RulesetRuleConditionsSubconditionsParameterList <a name="RulesetRuleConditionsSubconditionsParameterList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleConditionsSubconditionsParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get"></a>

```typescript
public get(index: number): RulesetRuleConditionsSubconditionsParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleConditionsSubconditionsParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>[]

---


### RulesetRuleConditionsSubconditionsParameterOutputReference <a name="RulesetRuleConditionsSubconditionsParameterOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleConditionsSubconditionsParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>

---


### RulesetRuleTimeFrameActiveBetweenList <a name="RulesetRuleTimeFrameActiveBetweenList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleTimeFrameActiveBetweenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get"></a>

```typescript
public get(index: number): RulesetRuleTimeFrameActiveBetweenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]

---


### RulesetRuleTimeFrameActiveBetweenOutputReference <a name="RulesetRuleTimeFrameActiveBetweenOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime">endTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleTimeFrameActiveBetween;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>

---


### RulesetRuleTimeFrameOutputReference <a name="RulesetRuleTimeFrameOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleTimeFrameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween">putActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly">putScheduledWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetActiveBetween">resetActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly">resetScheduledWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveBetween` <a name="putActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween"></a>

```typescript
public putActiveBetween(value: IResolvable | RulesetRuleTimeFrameActiveBetween[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]

---

##### `putScheduledWeekly` <a name="putScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly"></a>

```typescript
public putScheduledWeekly(value: IResolvable | RulesetRuleTimeFrameScheduledWeekly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]

---

##### `resetActiveBetween` <a name="resetActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetActiveBetween"></a>

```typescript
public resetActiveBetween(): void
```

##### `resetScheduledWeekly` <a name="resetScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```typescript
public resetScheduledWeekly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween">activeBetween</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly">scheduledWeekly</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput">activeBetweenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput">scheduledWeeklyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeBetween`<sup>Required</sup> <a name="activeBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween"></a>

```typescript
public readonly activeBetween: RulesetRuleTimeFrameActiveBetweenList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a>

---

##### `scheduledWeekly`<sup>Required</sup> <a name="scheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: RulesetRuleTimeFrameScheduledWeeklyList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a>

---

##### `activeBetweenInput`<sup>Optional</sup> <a name="activeBetweenInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```typescript
public readonly activeBetweenInput: IResolvable | RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>[]

---

##### `scheduledWeeklyInput`<sup>Optional</sup> <a name="scheduledWeeklyInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```typescript
public readonly scheduledWeeklyInput: IResolvable | RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RulesetRuleTimeFrame;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---


### RulesetRuleTimeFrameScheduledWeeklyList <a name="RulesetRuleTimeFrameScheduledWeeklyList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get"></a>

```typescript
public get(index: number): RulesetRuleTimeFrameScheduledWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>[]

---


### RulesetRuleTimeFrameScheduledWeeklyOutputReference <a name="RulesetRuleTimeFrameScheduledWeeklyOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: number[];
```

- *Type:* number[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleTimeFrameScheduledWeekly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>

---


### RulesetRuleVariableList <a name="RulesetRuleVariableList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get"></a>

```typescript
public get(index: number): RulesetRuleVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>[]

---


### RulesetRuleVariableOutputReference <a name="RulesetRuleVariableOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | RulesetRuleVariableParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters"></a>

```typescript
public readonly parameters: RulesetRuleVariableParametersList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | RulesetRuleVariableParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleVariable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>

---


### RulesetRuleVariableParametersList <a name="RulesetRuleVariableParametersList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleVariableParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get"></a>

```typescript
public get(index: number): RulesetRuleVariableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleVariableParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>[]

---


### RulesetRuleVariableParametersOutputReference <a name="RulesetRuleVariableParametersOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer"></a>

```typescript
import { rulesetRule } from '@cdktf/provider-pagerduty'

new rulesetRule.RulesetRuleVariableParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RulesetRuleVariableParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>

---



