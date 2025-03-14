# `extensionServicenow` Submodule <a name="`extensionServicenow` Submodule" id="@cdktf/provider-pagerduty.extensionServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtensionServicenow <a name="ExtensionServicenow" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow pagerduty_extension_servicenow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

new extensionServicenow.ExtensionServicenow(scope: Construct, id: string, config: ExtensionServicenowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig">ExtensionServicenowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig">ExtensionServicenowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExtensionServicenow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

extensionServicenow.ExtensionServicenow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

extensionServicenow.ExtensionServicenow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

extensionServicenow.ExtensionServicenow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

extensionServicenow.ExtensionServicenow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExtensionServicenow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExtensionServicenow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExtensionServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExtensionServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput">endpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput">extensionObjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput">extensionSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput">refererInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput">snowPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput">snowUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput">syncOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects">extensionObjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema">extensionSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer">referer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword">snowPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser">snowUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions">syncOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* string

---

##### `extensionObjectsInput`<sup>Optional</sup> <a name="extensionObjectsInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput"></a>

```typescript
public readonly extensionObjectsInput: string[];
```

- *Type:* string[]

---

##### `extensionSchemaInput`<sup>Optional</sup> <a name="extensionSchemaInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput"></a>

```typescript
public readonly extensionSchemaInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `refererInput`<sup>Optional</sup> <a name="refererInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput"></a>

```typescript
public readonly refererInput: string;
```

- *Type:* string

---

##### `snowPasswordInput`<sup>Optional</sup> <a name="snowPasswordInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput"></a>

```typescript
public readonly snowPasswordInput: string;
```

- *Type:* string

---

##### `snowUserInput`<sup>Optional</sup> <a name="snowUserInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput"></a>

```typescript
public readonly snowUserInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `syncOptionsInput`<sup>Optional</sup> <a name="syncOptionsInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput"></a>

```typescript
public readonly syncOptionsInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* string[]

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer"></a>

```typescript
public readonly referer: string;
```

- *Type:* string

---

##### `snowPassword`<sup>Required</sup> <a name="snowPassword" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword"></a>

```typescript
public readonly snowPassword: string;
```

- *Type:* string

---

##### `snowUser`<sup>Required</sup> <a name="snowUser" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser"></a>

```typescript
public readonly snowUser: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `syncOptions`<sup>Required</sup> <a name="syncOptions" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions"></a>

```typescript
public readonly syncOptions: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtensionServicenowConfig <a name="ExtensionServicenowConfig" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.Initializer"></a>

```typescript
import { extensionServicenow } from '@cdktf/provider-pagerduty'

const extensionServicenowConfig: extensionServicenow.ExtensionServicenowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects">extensionObjects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema">extensionSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer">referer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword">snowPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser">snowUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions">syncOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer"></a>

```typescript
public readonly referer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `snowPassword`<sup>Required</sup> <a name="snowPassword" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword"></a>

```typescript
public readonly snowPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `snowUser`<sup>Required</sup> <a name="snowUser" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser"></a>

```typescript
public readonly snowUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `syncOptions`<sup>Required</sup> <a name="syncOptions" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions"></a>

```typescript
public readonly syncOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#target ExtensionServicenow#target}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#name ExtensionServicenow#name}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/extension_servicenow#type ExtensionServicenow#type}.

---



