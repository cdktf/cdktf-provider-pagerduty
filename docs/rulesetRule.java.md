# `pagerduty_ruleset_rule`

Refer to the Terraform Registory for docs: [`pagerduty_ruleset_rule`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule).

# `rulesetRule` Submodule <a name="`rulesetRule` Submodule" id="@cdktf/provider-pagerduty.rulesetRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RulesetRule <a name="RulesetRule" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule pagerduty_ruleset_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRule;

RulesetRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ruleset(java.lang.String)
//  .actions(RulesetRuleActions)
//  .catchAll(java.lang.Boolean)
//  .catchAll(IResolvable)
//  .conditions(RulesetRuleConditions)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .position(java.lang.Number)
//  .timeFrame(RulesetRuleTimeFrame)
//  .variable(IResolvable)
//  .variable(java.util.List<RulesetRuleVariable>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.ruleset">ruleset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.catchAll">catchAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#id RulesetRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#position RulesetRule#position}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.timeFrame">timeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | time_frame block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>></code> | variable block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.ruleset"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.actions"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#actions RulesetRule#actions}

---

##### `catchAll`<sup>Optional</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.catchAll"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#conditions RulesetRule#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#id RulesetRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.position"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#position RulesetRule#position}.

---

##### `timeFrame`<sup>Optional</sup> <a name="timeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.timeFrame"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

time_frame block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#time_frame RulesetRule#time_frame}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.variable"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#variable RulesetRule#variable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions"></a>

```java
public void putActions(RulesetRuleActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions"></a>

```java
public void putConditions(RulesetRuleConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `putTimeFrame` <a name="putTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame"></a>

```java
public void putTimeFrame(RulesetRuleTimeFrame value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable"></a>

```java
public void putVariable(IResolvable OR java.util.List<RulesetRuleVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetActions"></a>

```java
public void resetActions()
```

##### `resetCatchAll` <a name="resetCatchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetCatchAll"></a>

```java
public void resetCatchAll()
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetId"></a>

```java
public void resetId()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTimeFrame` <a name="resetTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetTimeFrame"></a>

```java
public void resetTimeFrame()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetVariable"></a>

```java
public void resetVariable()
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

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRule;

RulesetRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRule;

RulesetRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRule;

RulesetRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRule;

RulesetRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RulesetRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RulesetRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RulesetRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RulesetRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RulesetRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame">timeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput">catchAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput">rulesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput">timeFrameInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll">catchAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions"></a>

```java
public RulesetRuleActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions"></a>

```java
public RulesetRuleConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a>

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame"></a>

```java
public RulesetRuleTimeFrameOutputReference getTimeFrame();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable"></a>

```java
public RulesetRuleVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput"></a>

```java
public RulesetRuleActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `catchAllInput`<sup>Optional</sup> <a name="catchAllInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput"></a>

```java
public java.lang.Object getCatchAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput"></a>

```java
public RulesetRuleConditions getConditionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput"></a>

```java
public java.lang.String getRulesetInput();
```

- *Type:* java.lang.String

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput"></a>

```java
public RulesetRuleTimeFrame getTimeFrameInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput"></a>

```java
public java.lang.Object getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll"></a>

```java
public java.lang.Object getCatchAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetRuleActions <a name="RulesetRuleActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActions;

RulesetRuleActions.builder()
//  .annotate(IResolvable)
//  .annotate(java.util.List<RulesetRuleActionsAnnotate>)
//  .eventAction(IResolvable)
//  .eventAction(java.util.List<RulesetRuleActionsEventAction>)
//  .extractions(IResolvable)
//  .extractions(java.util.List<RulesetRuleActionsExtractions>)
//  .priority(IResolvable)
//  .priority(java.util.List<RulesetRuleActionsPriority>)
//  .route(IResolvable)
//  .route(java.util.List<RulesetRuleActionsRoute>)
//  .severity(IResolvable)
//  .severity(java.util.List<RulesetRuleActionsSeverity>)
//  .suppress(IResolvable)
//  .suppress(java.util.List<RulesetRuleActionsSuppress>)
//  .suspend(IResolvable)
//  .suspend(java.util.List<RulesetRuleActionsSuspend>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate">annotate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>></code> | annotate block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction">eventAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>></code> | event_action block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions">extractions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>></code> | extractions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority">priority</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>></code> | priority block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route">route</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>></code> | route block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity">severity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>></code> | severity block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress">suppress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>></code> | suppress block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend">suspend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>></code> | suspend block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate"></a>

```java
public java.lang.Object getAnnotate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>>

annotate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#annotate RulesetRule#annotate}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction"></a>

```java
public java.lang.Object getEventAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>>

event_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#event_action RulesetRule#event_action}

---

##### `extractions`<sup>Optional</sup> <a name="extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions"></a>

```java
public java.lang.Object getExtractions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>>

extractions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#extractions RulesetRule#extractions}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority"></a>

```java
public java.lang.Object getPriority();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>>

priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#priority RulesetRule#priority}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route"></a>

```java
public java.lang.Object getRoute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#route RulesetRule#route}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity"></a>

```java
public java.lang.Object getSeverity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#severity RulesetRule#severity}

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress"></a>

```java
public java.lang.Object getSuppress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>>

suppress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#suppress RulesetRule#suppress}

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend"></a>

```java
public java.lang.Object getSuspend();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>>

suspend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#suspend RulesetRule#suspend}

---

### RulesetRuleActionsAnnotate <a name="RulesetRuleActionsAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsAnnotate;

RulesetRuleActionsAnnotate.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsEventAction <a name="RulesetRuleActionsEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsEventAction;

RulesetRuleActionsEventAction.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsExtractions <a name="RulesetRuleActionsExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsExtractions;

RulesetRuleActionsExtractions.builder()
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .target(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#regex RulesetRule#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#source RulesetRule#source}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#target RulesetRule#target}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#template RulesetRule#template}. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#regex RulesetRule#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#source RulesetRule#source}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#target RulesetRule#target}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#template RulesetRule#template}.

---

### RulesetRuleActionsPriority <a name="RulesetRuleActionsPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsPriority;

RulesetRuleActionsPriority.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsRoute <a name="RulesetRuleActionsRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsRoute;

RulesetRuleActionsRoute.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSeverity <a name="RulesetRuleActionsSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSeverity;

RulesetRuleActionsSeverity.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuppress <a name="RulesetRuleActionsSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuppress;

RulesetRuleActionsSuppress.builder()
//  .thresholdTimeAmount(java.lang.Number)
//  .thresholdTimeUnit(java.lang.String)
//  .thresholdValue(java.lang.Number)
//  .value(java.lang.Boolean)
//  .value(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount">thresholdTimeAmount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit">thresholdTimeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `thresholdTimeAmount`<sup>Optional</sup> <a name="thresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount"></a>

```java
public java.lang.Number getThresholdTimeAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}.

---

##### `thresholdTimeUnit`<sup>Optional</sup> <a name="thresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit"></a>

```java
public java.lang.String getThresholdTimeUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}.

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuspend <a name="RulesetRuleActionsSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuspend;

RulesetRuleActionsSuspend.builder()
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConditions <a name="RulesetRuleConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditions;

RulesetRuleConditions.builder()
//  .operator(java.lang.String)
//  .subconditions(IResolvable)
//  .subconditions(java.util.List<RulesetRuleConditionsSubconditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions">subconditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>></code> | subconditions block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `subconditions`<sup>Optional</sup> <a name="subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions"></a>

```java
public java.lang.Object getSubconditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>>

subconditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#subconditions RulesetRule#subconditions}

---

### RulesetRuleConditionsSubconditions <a name="RulesetRuleConditionsSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditions;

RulesetRuleConditionsSubconditions.builder()
//  .operator(java.lang.String)
//  .parameter(IResolvable)
//  .parameter(java.util.List<RulesetRuleConditionsSubconditionsParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>></code> | parameter block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#parameter RulesetRule#parameter}

---

### RulesetRuleConditionsSubconditionsParameter <a name="RulesetRuleConditionsSubconditionsParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditionsParameter;

RulesetRuleConditionsSubconditionsParameter.builder()
//  .path(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConfig <a name="RulesetRuleConfig" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConfig;

RulesetRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ruleset(java.lang.String)
//  .actions(RulesetRuleActions)
//  .catchAll(java.lang.Boolean)
//  .catchAll(IResolvable)
//  .conditions(RulesetRuleConditions)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .position(java.lang.Number)
//  .timeFrame(RulesetRuleTimeFrame)
//  .variable(IResolvable)
//  .variable(java.util.List<RulesetRuleVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll">catchAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#id RulesetRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#position RulesetRule#position}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame">timeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | time_frame block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>></code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions"></a>

```java
public RulesetRuleActions getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#actions RulesetRule#actions}

---

##### `catchAll`<sup>Optional</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll"></a>

```java
public java.lang.Object getCatchAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions"></a>

```java
public RulesetRuleConditions getConditions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#conditions RulesetRule#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#id RulesetRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#position RulesetRule#position}.

---

##### `timeFrame`<sup>Optional</sup> <a name="timeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame"></a>

```java
public RulesetRuleTimeFrame getTimeFrame();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

time_frame block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#time_frame RulesetRule#time_frame}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable"></a>

```java
public java.lang.Object getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#variable RulesetRule#variable}

---

### RulesetRuleTimeFrame <a name="RulesetRuleTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrame;

RulesetRuleTimeFrame.builder()
//  .activeBetween(IResolvable)
//  .activeBetween(java.util.List<RulesetRuleTimeFrameActiveBetween>)
//  .scheduledWeekly(IResolvable)
//  .scheduledWeekly(java.util.List<RulesetRuleTimeFrameScheduledWeekly>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween">activeBetween</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>></code> | active_between block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly">scheduledWeekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>></code> | scheduled_weekly block. |

---

##### `activeBetween`<sup>Optional</sup> <a name="activeBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween"></a>

```java
public java.lang.Object getActiveBetween();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>>

active_between block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#active_between RulesetRule#active_between}

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="scheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly"></a>

```java
public java.lang.Object getScheduledWeekly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>>

scheduled_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#scheduled_weekly RulesetRule#scheduled_weekly}

---

### RulesetRuleTimeFrameActiveBetween <a name="RulesetRuleTimeFrameActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameActiveBetween;

RulesetRuleTimeFrameActiveBetween.builder()
//  .endTime(java.lang.Number)
//  .startTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#end_time RulesetRule#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#end_time RulesetRule#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

### RulesetRuleTimeFrameScheduledWeekly <a name="RulesetRuleTimeFrameScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameScheduledWeekly;

RulesetRuleTimeFrameScheduledWeekly.builder()
//  .duration(java.lang.Number)
//  .startTime(java.lang.Number)
//  .timezone(java.lang.String)
//  .weekdays(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#duration RulesetRule#duration}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#timezone RulesetRule#timezone}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#duration RulesetRule#duration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#timezone RulesetRule#timezone}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```java
public java.util.List<java.lang.Number> getWeekdays();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}.

---

### RulesetRuleVariable <a name="RulesetRuleVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariable;

RulesetRuleVariable.builder()
//  .name(java.lang.String)
//  .parameters(IResolvable)
//  .parameters(java.util.List<RulesetRuleVariableParameters>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#name RulesetRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>></code> | parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#type RulesetRule#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#name RulesetRule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters"></a>

```java
public java.lang.Object getParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#parameters RulesetRule#parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#type RulesetRule#type}.

---

### RulesetRuleVariableParameters <a name="RulesetRuleVariableParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariableParameters;

RulesetRuleVariableParameters.builder()
//  .path(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRuleActionsAnnotateList <a name="RulesetRuleActionsAnnotateList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsAnnotateList;

new RulesetRuleActionsAnnotateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get"></a>

```java
public RulesetRuleActionsAnnotateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>>

---


### RulesetRuleActionsAnnotateOutputReference <a name="RulesetRuleActionsAnnotateOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsAnnotateOutputReference;

new RulesetRuleActionsAnnotateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>

---


### RulesetRuleActionsEventActionList <a name="RulesetRuleActionsEventActionList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsEventActionList;

new RulesetRuleActionsEventActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get"></a>

```java
public RulesetRuleActionsEventActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>>

---


### RulesetRuleActionsEventActionOutputReference <a name="RulesetRuleActionsEventActionOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsEventActionOutputReference;

new RulesetRuleActionsEventActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>

---


### RulesetRuleActionsExtractionsList <a name="RulesetRuleActionsExtractionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsExtractionsList;

new RulesetRuleActionsExtractionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get"></a>

```java
public RulesetRuleActionsExtractionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>>

---


### RulesetRuleActionsExtractionsOutputReference <a name="RulesetRuleActionsExtractionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsExtractionsOutputReference;

new RulesetRuleActionsExtractionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTemplate"></a>

```java
public void resetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>

---


### RulesetRuleActionsOutputReference <a name="RulesetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsOutputReference;

new RulesetRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotate` <a name="putAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate"></a>

```java
public void putAnnotate(IResolvable OR java.util.List<RulesetRuleActionsAnnotate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>>

---

##### `putEventAction` <a name="putEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction"></a>

```java
public void putEventAction(IResolvable OR java.util.List<RulesetRuleActionsEventAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>>

---

##### `putExtractions` <a name="putExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions"></a>

```java
public void putExtractions(IResolvable OR java.util.List<RulesetRuleActionsExtractions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>>

---

##### `putPriority` <a name="putPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority"></a>

```java
public void putPriority(IResolvable OR java.util.List<RulesetRuleActionsPriority> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>>

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute"></a>

```java
public void putRoute(IResolvable OR java.util.List<RulesetRuleActionsRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>>

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity"></a>

```java
public void putSeverity(IResolvable OR java.util.List<RulesetRuleActionsSeverity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>>

---

##### `putSuppress` <a name="putSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress"></a>

```java
public void putSuppress(IResolvable OR java.util.List<RulesetRuleActionsSuppress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>>

---

##### `putSuspend` <a name="putSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend"></a>

```java
public void putSuspend(IResolvable OR java.util.List<RulesetRuleActionsSuspend> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>>

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetAnnotate"></a>

```java
public void resetAnnotate()
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetEventAction"></a>

```java
public void resetEventAction()
```

##### `resetExtractions` <a name="resetExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetExtractions"></a>

```java
public void resetExtractions()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetRoute"></a>

```java
public void resetRoute()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuppress"></a>

```java
public void resetSuppress()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate">annotate</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction">eventAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions">extractions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority">priority</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress">suppress</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend">suspend</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput">extractionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput">routeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput">severityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate"></a>

```java
public RulesetRuleActionsAnnotateList getAnnotate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a>

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction"></a>

```java
public RulesetRuleActionsEventActionList getEventAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a>

---

##### `extractions`<sup>Required</sup> <a name="extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions"></a>

```java
public RulesetRuleActionsExtractionsList getExtractions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority"></a>

```java
public RulesetRuleActionsPriorityList getPriority();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route"></a>

```java
public RulesetRuleActionsRouteList getRoute();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity"></a>

```java
public RulesetRuleActionsSeverityList getSeverity();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a>

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress"></a>

```java
public RulesetRuleActionsSuppressList getSuppress();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a>

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend"></a>

```java
public RulesetRuleActionsSuspendList getSuspend();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput"></a>

```java
public java.lang.Object getAnnotateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate">RulesetRuleActionsAnnotate</a>>

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.Object getEventActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction">RulesetRuleActionsEventAction</a>>

---

##### `extractionsInput`<sup>Optional</sup> <a name="extractionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput"></a>

```java
public java.lang.Object getExtractionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions">RulesetRuleActionsExtractions</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput"></a>

```java
public java.lang.Object getPriorityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>>

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput"></a>

```java
public java.lang.Object getRouteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput"></a>

```java
public java.lang.Object getSeverityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>>

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput"></a>

```java
public java.lang.Object getSuppressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>>

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput"></a>

```java
public java.lang.Object getSuspendInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue"></a>

```java
public RulesetRuleActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---


### RulesetRuleActionsPriorityList <a name="RulesetRuleActionsPriorityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsPriorityList;

new RulesetRuleActionsPriorityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get"></a>

```java
public RulesetRuleActionsPriorityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>>

---


### RulesetRuleActionsPriorityOutputReference <a name="RulesetRuleActionsPriorityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsPriorityOutputReference;

new RulesetRuleActionsPriorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority">RulesetRuleActionsPriority</a>

---


### RulesetRuleActionsRouteList <a name="RulesetRuleActionsRouteList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsRouteList;

new RulesetRuleActionsRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get"></a>

```java
public RulesetRuleActionsRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>>

---


### RulesetRuleActionsRouteOutputReference <a name="RulesetRuleActionsRouteOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsRouteOutputReference;

new RulesetRuleActionsRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute">RulesetRuleActionsRoute</a>

---


### RulesetRuleActionsSeverityList <a name="RulesetRuleActionsSeverityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSeverityList;

new RulesetRuleActionsSeverityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get"></a>

```java
public RulesetRuleActionsSeverityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>>

---


### RulesetRuleActionsSeverityOutputReference <a name="RulesetRuleActionsSeverityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSeverityOutputReference;

new RulesetRuleActionsSeverityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity">RulesetRuleActionsSeverity</a>

---


### RulesetRuleActionsSuppressList <a name="RulesetRuleActionsSuppressList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuppressList;

new RulesetRuleActionsSuppressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get"></a>

```java
public RulesetRuleActionsSuppressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>>

---


### RulesetRuleActionsSuppressOutputReference <a name="RulesetRuleActionsSuppressOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuppressOutputReference;

new RulesetRuleActionsSuppressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdTimeAmount` <a name="resetThresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeAmount"></a>

```java
public void resetThresholdTimeAmount()
```

##### `resetThresholdTimeUnit` <a name="resetThresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeUnit"></a>

```java
public void resetThresholdTimeUnit()
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdValue"></a>

```java
public void resetThresholdValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput">thresholdTimeAmountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput">thresholdTimeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount">thresholdTimeAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit">thresholdTimeUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdTimeAmountInput`<sup>Optional</sup> <a name="thresholdTimeAmountInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput"></a>

```java
public java.lang.Number getThresholdTimeAmountInput();
```

- *Type:* java.lang.Number

---

##### `thresholdTimeUnitInput`<sup>Optional</sup> <a name="thresholdTimeUnitInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput"></a>

```java
public java.lang.String getThresholdTimeUnitInput();
```

- *Type:* java.lang.String

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput"></a>

```java
public java.lang.Number getThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thresholdTimeAmount`<sup>Required</sup> <a name="thresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount"></a>

```java
public java.lang.Number getThresholdTimeAmount();
```

- *Type:* java.lang.Number

---

##### `thresholdTimeUnit`<sup>Required</sup> <a name="thresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit"></a>

```java
public java.lang.String getThresholdTimeUnit();
```

- *Type:* java.lang.String

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress">RulesetRuleActionsSuppress</a>

---


### RulesetRuleActionsSuspendList <a name="RulesetRuleActionsSuspendList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuspendList;

new RulesetRuleActionsSuspendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get"></a>

```java
public RulesetRuleActionsSuspendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>>

---


### RulesetRuleActionsSuspendOutputReference <a name="RulesetRuleActionsSuspendOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleActionsSuspendOutputReference;

new RulesetRuleActionsSuspendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend">RulesetRuleActionsSuspend</a>

---


### RulesetRuleConditionsOutputReference <a name="RulesetRuleConditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsOutputReference;

new RulesetRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubconditions` <a name="putSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions"></a>

```java
public void putSubconditions(IResolvable OR java.util.List<RulesetRuleConditionsSubconditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>>

---

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetSubconditions` <a name="resetSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetSubconditions"></a>

```java
public void resetSubconditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions">subconditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput">subconditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subconditions`<sup>Required</sup> <a name="subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions"></a>

```java
public RulesetRuleConditionsSubconditionsList getSubconditions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `subconditionsInput`<sup>Optional</sup> <a name="subconditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput"></a>

```java
public java.lang.Object getSubconditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue"></a>

```java
public RulesetRuleConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---


### RulesetRuleConditionsSubconditionsList <a name="RulesetRuleConditionsSubconditionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditionsList;

new RulesetRuleConditionsSubconditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get"></a>

```java
public RulesetRuleConditionsSubconditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>>

---


### RulesetRuleConditionsSubconditionsOutputReference <a name="RulesetRuleConditionsSubconditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditionsOutputReference;

new RulesetRuleConditionsSubconditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<RulesetRuleConditionsSubconditionsParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>>

---

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetParameter"></a>

```java
public void resetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter"></a>

```java
public RulesetRuleConditionsSubconditionsParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions">RulesetRuleConditionsSubconditions</a>

---


### RulesetRuleConditionsSubconditionsParameterList <a name="RulesetRuleConditionsSubconditionsParameterList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditionsParameterList;

new RulesetRuleConditionsSubconditionsParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get"></a>

```java
public RulesetRuleConditionsSubconditionsParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>>

---


### RulesetRuleConditionsSubconditionsParameterOutputReference <a name="RulesetRuleConditionsSubconditionsParameterOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleConditionsSubconditionsParameterOutputReference;

new RulesetRuleConditionsSubconditionsParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter">RulesetRuleConditionsSubconditionsParameter</a>

---


### RulesetRuleTimeFrameActiveBetweenList <a name="RulesetRuleTimeFrameActiveBetweenList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameActiveBetweenList;

new RulesetRuleTimeFrameActiveBetweenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get"></a>

```java
public RulesetRuleTimeFrameActiveBetweenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>>

---


### RulesetRuleTimeFrameActiveBetweenOutputReference <a name="RulesetRuleTimeFrameActiveBetweenOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameActiveBetweenOutputReference;

new RulesetRuleTimeFrameActiveBetweenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime">endTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput"></a>

```java
public java.lang.Number getEndTimeInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime"></a>

```java
public java.lang.Number getEndTime();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>

---


### RulesetRuleTimeFrameOutputReference <a name="RulesetRuleTimeFrameOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameOutputReference;

new RulesetRuleTimeFrameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveBetween` <a name="putActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween"></a>

```java
public void putActiveBetween(IResolvable OR java.util.List<RulesetRuleTimeFrameActiveBetween> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>>

---

##### `putScheduledWeekly` <a name="putScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly"></a>

```java
public void putScheduledWeekly(IResolvable OR java.util.List<RulesetRuleTimeFrameScheduledWeekly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>>

---

##### `resetActiveBetween` <a name="resetActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetActiveBetween"></a>

```java
public void resetActiveBetween()
```

##### `resetScheduledWeekly` <a name="resetScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```java
public void resetScheduledWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween">activeBetween</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly">scheduledWeekly</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput">activeBetweenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput">scheduledWeeklyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeBetween`<sup>Required</sup> <a name="activeBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween"></a>

```java
public RulesetRuleTimeFrameActiveBetweenList getActiveBetween();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a>

---

##### `scheduledWeekly`<sup>Required</sup> <a name="scheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```java
public RulesetRuleTimeFrameScheduledWeeklyList getScheduledWeekly();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a>

---

##### `activeBetweenInput`<sup>Optional</sup> <a name="activeBetweenInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```java
public java.lang.Object getActiveBetweenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween">RulesetRuleTimeFrameActiveBetween</a>>

---

##### `scheduledWeeklyInput`<sup>Optional</sup> <a name="scheduledWeeklyInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```java
public java.lang.Object getScheduledWeeklyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue"></a>

```java
public RulesetRuleTimeFrame getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---


### RulesetRuleTimeFrameScheduledWeeklyList <a name="RulesetRuleTimeFrameScheduledWeeklyList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameScheduledWeeklyList;

new RulesetRuleTimeFrameScheduledWeeklyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get"></a>

```java
public RulesetRuleTimeFrameScheduledWeeklyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>>

---


### RulesetRuleTimeFrameScheduledWeeklyOutputReference <a name="RulesetRuleTimeFrameScheduledWeeklyOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleTimeFrameScheduledWeeklyOutputReference;

new RulesetRuleTimeFrameScheduledWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays"></a>

```java
public void resetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput"></a>

```java
public java.lang.Number getStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput"></a>

```java
public java.util.List<java.lang.Number> getWeekdaysInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays"></a>

```java
public java.util.List<java.lang.Number> getWeekdays();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly">RulesetRuleTimeFrameScheduledWeekly</a>

---


### RulesetRuleVariableList <a name="RulesetRuleVariableList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariableList;

new RulesetRuleVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get"></a>

```java
public RulesetRuleVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>>

---


### RulesetRuleVariableOutputReference <a name="RulesetRuleVariableOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariableOutputReference;

new RulesetRuleVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable OR java.util.List<RulesetRuleVariableParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput">parametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters"></a>

```java
public RulesetRuleVariableParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput"></a>

```java
public java.lang.Object getParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable">RulesetRuleVariable</a>

---


### RulesetRuleVariableParametersList <a name="RulesetRuleVariableParametersList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariableParametersList;

new RulesetRuleVariableParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get"></a>

```java
public RulesetRuleVariableParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>>

---


### RulesetRuleVariableParametersOutputReference <a name="RulesetRuleVariableParametersOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.ruleset_rule.RulesetRuleVariableParametersOutputReference;

new RulesetRuleVariableParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters">RulesetRuleVariableParameters</a>

---



