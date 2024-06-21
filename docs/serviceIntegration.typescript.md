# `serviceIntegration` Submodule <a name="`serviceIntegration` Submodule" id="@cdktf/provider-pagerduty.serviceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceIntegration <a name="ServiceIntegration" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration pagerduty_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegration(scope: Construct, id: string, config: ServiceIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig">ServiceIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig">ServiceIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter">putEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser">putEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter">resetEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode">resetEmailFilterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation">resetEmailIncidentCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser">resetEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback">resetEmailParsingFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail">resetIntegrationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey">resetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor">resetVendor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailFilter` <a name="putEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter"></a>

```typescript
public putEmailFilter(value: IResolvable | ServiceIntegrationEmailFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]

---

##### `putEmailParser` <a name="putEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser"></a>

```typescript
public putEmailParser(value: IResolvable | ServiceIntegrationEmailParser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]

---

##### `resetEmailFilter` <a name="resetEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter"></a>

```typescript
public resetEmailFilter(): void
```

##### `resetEmailFilterMode` <a name="resetEmailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode"></a>

```typescript
public resetEmailFilterMode(): void
```

##### `resetEmailIncidentCreation` <a name="resetEmailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation"></a>

```typescript
public resetEmailIncidentCreation(): void
```

##### `resetEmailParser` <a name="resetEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser"></a>

```typescript
public resetEmailParser(): void
```

##### `resetEmailParsingFallback` <a name="resetEmailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback"></a>

```typescript
public resetEmailParsingFallback(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationEmail` <a name="resetIntegrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail"></a>

```typescript
public resetIntegrationEmail(): void
```

##### `resetIntegrationKey` <a name="resetIntegrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey"></a>

```typescript
public resetIntegrationKey(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVendor` <a name="resetVendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor"></a>

```typescript
public resetVendor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

serviceIntegration.ServiceIntegration.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

serviceIntegration.ServiceIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

serviceIntegration.ServiceIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

serviceIntegration.ServiceIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter">emailFilter</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser">emailParser</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput">emailFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput">emailFilterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput">emailIncidentCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput">emailParserInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput">emailParsingFallbackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput">integrationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput">vendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode">emailFilterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation">emailIncidentCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback">emailParsingFallback</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail">integrationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailFilter`<sup>Required</sup> <a name="emailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter"></a>

```typescript
public readonly emailFilter: ServiceIntegrationEmailFilterList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a>

---

##### `emailParser`<sup>Required</sup> <a name="emailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser"></a>

```typescript
public readonly emailParser: ServiceIntegrationEmailParserList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a>

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `emailFilterInput`<sup>Optional</sup> <a name="emailFilterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput"></a>

```typescript
public readonly emailFilterInput: IResolvable | ServiceIntegrationEmailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]

---

##### `emailFilterModeInput`<sup>Optional</sup> <a name="emailFilterModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput"></a>

```typescript
public readonly emailFilterModeInput: string;
```

- *Type:* string

---

##### `emailIncidentCreationInput`<sup>Optional</sup> <a name="emailIncidentCreationInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput"></a>

```typescript
public readonly emailIncidentCreationInput: string;
```

- *Type:* string

---

##### `emailParserInput`<sup>Optional</sup> <a name="emailParserInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput"></a>

```typescript
public readonly emailParserInput: IResolvable | ServiceIntegrationEmailParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]

---

##### `emailParsingFallbackInput`<sup>Optional</sup> <a name="emailParsingFallbackInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput"></a>

```typescript
public readonly emailParsingFallbackInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationEmailInput`<sup>Optional</sup> <a name="integrationEmailInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput"></a>

```typescript
public readonly integrationEmailInput: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput"></a>

```typescript
public readonly vendorInput: string;
```

- *Type:* string

---

##### `emailFilterMode`<sup>Required</sup> <a name="emailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode"></a>

```typescript
public readonly emailFilterMode: string;
```

- *Type:* string

---

##### `emailIncidentCreation`<sup>Required</sup> <a name="emailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation"></a>

```typescript
public readonly emailIncidentCreation: string;
```

- *Type:* string

---

##### `emailParsingFallback`<sup>Required</sup> <a name="emailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback"></a>

```typescript
public readonly emailParsingFallback: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationEmail`<sup>Required</sup> <a name="integrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail"></a>

```typescript
public readonly integrationEmail: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceIntegrationConfig <a name="ServiceIntegrationConfig" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationConfig: serviceIntegration.ServiceIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter">emailFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]</code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode">emailFilterMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation">emailIncidentCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser">emailParser</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]</code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback">emailParsingFallback</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail">integrationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey">integrationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor">vendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `emailFilter`<sup>Optional</sup> <a name="emailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter"></a>

```typescript
public readonly emailFilter: IResolvable | ServiceIntegrationEmailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `emailFilterMode`<sup>Optional</sup> <a name="emailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode"></a>

```typescript
public readonly emailFilterMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `emailIncidentCreation`<sup>Optional</sup> <a name="emailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation"></a>

```typescript
public readonly emailIncidentCreation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `emailParser`<sup>Optional</sup> <a name="emailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser"></a>

```typescript
public readonly emailParser: IResolvable | ServiceIntegrationEmailParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `emailParsingFallback`<sup>Optional</sup> <a name="emailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback"></a>

```typescript
public readonly emailParsingFallback: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationEmail`<sup>Optional</sup> <a name="integrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail"></a>

```typescript
public readonly integrationEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `integrationKey`<sup>Optional</sup> <a name="integrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

### ServiceIntegrationEmailFilter <a name="ServiceIntegrationEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailFilter: serviceIntegration.ServiceIntegrationEmailFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode">bodyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex">bodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode">fromEmailMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex">fromEmailRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode">subjectMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex">subjectRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}. |

---

##### `bodyMode`<sup>Optional</sup> <a name="bodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode"></a>

```typescript
public readonly bodyMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}.

---

##### `bodyRegex`<sup>Optional</sup> <a name="bodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex"></a>

```typescript
public readonly bodyRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}.

---

##### `fromEmailMode`<sup>Optional</sup> <a name="fromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode"></a>

```typescript
public readonly fromEmailMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}.

---

##### `fromEmailRegex`<sup>Optional</sup> <a name="fromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex"></a>

```typescript
public readonly fromEmailRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}.

---

##### `subjectMode`<sup>Optional</sup> <a name="subjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode"></a>

```typescript
public readonly subjectMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}.

---

##### `subjectRegex`<sup>Optional</sup> <a name="subjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex"></a>

```typescript
public readonly subjectRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}.

---

### ServiceIntegrationEmailParser <a name="ServiceIntegrationEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailParser: serviceIntegration.ServiceIntegrationEmailParser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#action ServiceIntegration#action}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate">matchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | match_predicate block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor">valueExtractor</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]</code> | value_extractor block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#action ServiceIntegration#action}.

---

##### `matchPredicate`<sup>Required</sup> <a name="matchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate"></a>

```typescript
public readonly matchPredicate: ServiceIntegrationEmailParserMatchPredicate;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

match_predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#match_predicate ServiceIntegration#match_predicate}

---

##### `valueExtractor`<sup>Optional</sup> <a name="valueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor"></a>

```typescript
public readonly valueExtractor: IResolvable | ServiceIntegrationEmailParserValueExtractor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]

value_extractor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#value_extractor ServiceIntegration#value_extractor}

---

### ServiceIntegrationEmailParserMatchPredicate <a name="ServiceIntegrationEmailParserMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailParserMatchPredicate: serviceIntegration.ServiceIntegrationEmailParserMatchPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate">predicate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]</code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate"></a>

```typescript
public readonly predicate: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailParserMatchPredicatePredicate: serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher">matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part">part</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate">predicate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]</code> | predicate block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate"></a>

```typescript
public readonly predicate: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailParserMatchPredicatePredicatePredicate: serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher">matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part">part</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}. |

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}.

---

### ServiceIntegrationEmailParserValueExtractor <a name="ServiceIntegrationEmailParserValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

const serviceIntegrationEmailParserValueExtractor: serviceIntegration.ServiceIntegrationEmailParserValueExtractor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part">part</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName">valueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#value_name ServiceIntegration#value_name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore">endsBefore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#regex ServiceIntegration#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter">startsAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}. |

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `valueName`<sup>Required</sup> <a name="valueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName"></a>

```typescript
public readonly valueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#value_name ServiceIntegration#value_name}.

---

##### `endsBefore`<sup>Optional</sup> <a name="endsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore"></a>

```typescript
public readonly endsBefore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#regex ServiceIntegration#regex}.

---

##### `startsAfter`<sup>Optional</sup> <a name="startsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter"></a>

```typescript
public readonly startsAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceIntegrationEmailFilterList <a name="ServiceIntegrationEmailFilterList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get"></a>

```typescript
public get(index: number): ServiceIntegrationEmailFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>[]

---


### ServiceIntegrationEmailFilterOutputReference <a name="ServiceIntegrationEmailFilterOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode">resetBodyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex">resetBodyRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode">resetFromEmailMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex">resetFromEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode">resetSubjectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex">resetSubjectRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBodyMode` <a name="resetBodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode"></a>

```typescript
public resetBodyMode(): void
```

##### `resetBodyRegex` <a name="resetBodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex"></a>

```typescript
public resetBodyRegex(): void
```

##### `resetFromEmailMode` <a name="resetFromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode"></a>

```typescript
public resetFromEmailMode(): void
```

##### `resetFromEmailRegex` <a name="resetFromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex"></a>

```typescript
public resetFromEmailRegex(): void
```

##### `resetSubjectMode` <a name="resetSubjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode"></a>

```typescript
public resetSubjectMode(): void
```

##### `resetSubjectRegex` <a name="resetSubjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex"></a>

```typescript
public resetSubjectRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput">bodyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput">bodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput">fromEmailModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput">fromEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput">subjectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput">subjectRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode">bodyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex">bodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode">fromEmailMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex">fromEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode">subjectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex">subjectRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `bodyModeInput`<sup>Optional</sup> <a name="bodyModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput"></a>

```typescript
public readonly bodyModeInput: string;
```

- *Type:* string

---

##### `bodyRegexInput`<sup>Optional</sup> <a name="bodyRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput"></a>

```typescript
public readonly bodyRegexInput: string;
```

- *Type:* string

---

##### `fromEmailModeInput`<sup>Optional</sup> <a name="fromEmailModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput"></a>

```typescript
public readonly fromEmailModeInput: string;
```

- *Type:* string

---

##### `fromEmailRegexInput`<sup>Optional</sup> <a name="fromEmailRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput"></a>

```typescript
public readonly fromEmailRegexInput: string;
```

- *Type:* string

---

##### `subjectModeInput`<sup>Optional</sup> <a name="subjectModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput"></a>

```typescript
public readonly subjectModeInput: string;
```

- *Type:* string

---

##### `subjectRegexInput`<sup>Optional</sup> <a name="subjectRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput"></a>

```typescript
public readonly subjectRegexInput: string;
```

- *Type:* string

---

##### `bodyMode`<sup>Required</sup> <a name="bodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode"></a>

```typescript
public readonly bodyMode: string;
```

- *Type:* string

---

##### `bodyRegex`<sup>Required</sup> <a name="bodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex"></a>

```typescript
public readonly bodyRegex: string;
```

- *Type:* string

---

##### `fromEmailMode`<sup>Required</sup> <a name="fromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode"></a>

```typescript
public readonly fromEmailMode: string;
```

- *Type:* string

---

##### `fromEmailRegex`<sup>Required</sup> <a name="fromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex"></a>

```typescript
public readonly fromEmailRegex: string;
```

- *Type:* string

---

##### `subjectMode`<sup>Required</sup> <a name="subjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode"></a>

```typescript
public readonly subjectMode: string;
```

- *Type:* string

---

##### `subjectRegex`<sup>Required</sup> <a name="subjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex"></a>

```typescript
public readonly subjectRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter">ServiceIntegrationEmailFilter</a>

---


### ServiceIntegrationEmailParserList <a name="ServiceIntegrationEmailParserList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get"></a>

```typescript
public get(index: number): ServiceIntegrationEmailParserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>[]

---


### ServiceIntegrationEmailParserMatchPredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate"></a>

```typescript
public putPredicate(value: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]

---

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate"></a>

```typescript
public resetPredicate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput">predicateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate"></a>

```typescript
public readonly predicate: ServiceIntegrationEmailParserMatchPredicatePredicateList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a>

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput"></a>

```typescript
public readonly predicateInput: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceIntegrationEmailParserMatchPredicate;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get"></a>

```typescript
public get(index: number): ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>[]

---


### ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart">resetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate"></a>

```typescript
public putPredicate(value: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]

---

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart"></a>

```typescript
public resetPart(): void
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate"></a>

```typescript
public resetPredicate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput">partInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput">predicateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate"></a>

```typescript
public readonly predicate: ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a>

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput"></a>

```typescript
public readonly partInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput"></a>

```typescript
public readonly predicateInput: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get"></a>

```typescript
public get(index: number): ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>[]

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput">partInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput"></a>

```typescript
public readonly partInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserMatchPredicatePredicatePredicate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate">ServiceIntegrationEmailParserMatchPredicatePredicatePredicate</a>

---


### ServiceIntegrationEmailParserOutputReference <a name="ServiceIntegrationEmailParserOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate">putMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor">putValueExtractor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor">resetValueExtractor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchPredicate` <a name="putMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate"></a>

```typescript
public putMatchPredicate(value: ServiceIntegrationEmailParserMatchPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `putValueExtractor` <a name="putValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor"></a>

```typescript
public putValueExtractor(value: IResolvable | ServiceIntegrationEmailParserValueExtractor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]

---

##### `resetValueExtractor` <a name="resetValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor"></a>

```typescript
public resetValueExtractor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate">matchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor">valueExtractor</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput">matchPredicateInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput">valueExtractorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `matchPredicate`<sup>Required</sup> <a name="matchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate"></a>

```typescript
public readonly matchPredicate: ServiceIntegrationEmailParserMatchPredicateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a>

---

##### `valueExtractor`<sup>Required</sup> <a name="valueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor"></a>

```typescript
public readonly valueExtractor: ServiceIntegrationEmailParserValueExtractorList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `matchPredicateInput`<sup>Optional</sup> <a name="matchPredicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput"></a>

```typescript
public readonly matchPredicateInput: ServiceIntegrationEmailParserMatchPredicate;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `valueExtractorInput`<sup>Optional</sup> <a name="valueExtractorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput"></a>

```typescript
public readonly valueExtractorInput: IResolvable | ServiceIntegrationEmailParserValueExtractor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser">ServiceIntegrationEmailParser</a>

---


### ServiceIntegrationEmailParserValueExtractorList <a name="ServiceIntegrationEmailParserValueExtractorList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserValueExtractorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get"></a>

```typescript
public get(index: number): ServiceIntegrationEmailParserValueExtractorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserValueExtractor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>[]

---


### ServiceIntegrationEmailParserValueExtractorOutputReference <a name="ServiceIntegrationEmailParserValueExtractorOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer"></a>

```typescript
import { serviceIntegration } from '@cdktf/provider-pagerduty'

new serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore">resetEndsBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter">resetStartsAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsBefore` <a name="resetEndsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore"></a>

```typescript
public resetEndsBefore(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetStartsAfter` <a name="resetStartsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter"></a>

```typescript
public resetStartsAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput">endsBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput">partInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput">startsAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput">valueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore">endsBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter">startsAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName">valueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsBeforeInput`<sup>Optional</sup> <a name="endsBeforeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput"></a>

```typescript
public readonly endsBeforeInput: string;
```

- *Type:* string

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput"></a>

```typescript
public readonly partInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `startsAfterInput`<sup>Optional</sup> <a name="startsAfterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput"></a>

```typescript
public readonly startsAfterInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueNameInput`<sup>Optional</sup> <a name="valueNameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput"></a>

```typescript
public readonly valueNameInput: string;
```

- *Type:* string

---

##### `endsBefore`<sup>Required</sup> <a name="endsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore"></a>

```typescript
public readonly endsBefore: string;
```

- *Type:* string

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `startsAfter`<sup>Required</sup> <a name="startsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter"></a>

```typescript
public readonly startsAfter: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `valueName`<sup>Required</sup> <a name="valueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName"></a>

```typescript
public readonly valueName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceIntegrationEmailParserValueExtractor;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor">ServiceIntegrationEmailParserValueExtractor</a>

---



