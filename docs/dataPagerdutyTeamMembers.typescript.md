# `dataPagerdutyTeamMembers` Submodule <a name="`dataPagerdutyTeamMembers` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyTeamMembers <a name="DataPagerdutyTeamMembers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.4/docs/data-sources/team_members pagerduty_team_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

new dataPagerdutyTeamMembers.DataPagerdutyTeamMembers(scope: Construct, id: string, config: DataPagerdutyTeamMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig">DataPagerdutyTeamMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig">DataPagerdutyTeamMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyTeamMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyTeamMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyTeamMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyTeamMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.4/docs/data-sources/team_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyTeamMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.members">members</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList">DataPagerdutyTeamMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.members"></a>

```typescript
public readonly members: DataPagerdutyTeamMembersMembersList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList">DataPagerdutyTeamMembersMembersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyTeamMembersConfig <a name="DataPagerdutyTeamMembersConfig" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.Initializer"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

const dataPagerdutyTeamMembersConfig: dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the team to find via the PagerDuty API. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the team to find via the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.4/docs/data-sources/team_members#team_id DataPagerdutyTeamMembers#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.4/docs/data-sources/team_members#id DataPagerdutyTeamMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataPagerdutyTeamMembersMembers <a name="DataPagerdutyTeamMembersMembers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers.Initializer"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

const dataPagerdutyTeamMembersMembers: dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyTeamMembersMembersList <a name="DataPagerdutyTeamMembersMembersList" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

new dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get"></a>

```typescript
public get(index: number): DataPagerdutyTeamMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyTeamMembersMembersOutputReference <a name="DataPagerdutyTeamMembersMembersOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyTeamMembers } from '@cdktf/provider-pagerduty'

new dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers">DataPagerdutyTeamMembersMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyTeamMembersMembers;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyTeamMembers.DataPagerdutyTeamMembersMembers">DataPagerdutyTeamMembersMembers</a>

---



