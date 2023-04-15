// https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#description EscalationPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#name EscalationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#num_loops EscalationPolicy#num_loops}
  */
  readonly numLoops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#teams EscalationPolicy#teams}
  */
  readonly teams?: string[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#rule EscalationPolicy#rule}
  */
  readonly rule: EscalationPolicyRule[] | cdktf.IResolvable;
}
export interface EscalationPolicyRuleTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#type EscalationPolicy#type}
  */
  readonly type?: string;
}

export function escalationPolicyRuleTargetToTerraform(struct?: EscalationPolicyRuleTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EscalationPolicyRuleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EscalationPolicyRuleTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyRuleTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EscalationPolicyRuleTargetList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyRuleTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EscalationPolicyRuleTargetOutputReference {
    return new EscalationPolicyRuleTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}
  */
  readonly escalationDelayInMinutes: number;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy#target EscalationPolicy#target}
  */
  readonly target: EscalationPolicyRuleTarget[] | cdktf.IResolvable;
}

export function escalationPolicyRuleToTerraform(struct?: EscalationPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_delay_in_minutes: cdktf.numberToTerraform(struct!.escalationDelayInMinutes),
    target: cdktf.listMapper(escalationPolicyRuleTargetToTerraform, true)(struct!.target),
  }
}

export class EscalationPolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EscalationPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationDelayInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationDelayInMinutes = this._escalationDelayInMinutes;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalationDelayInMinutes = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalationDelayInMinutes = value.escalationDelayInMinutes;
      this._target.internalValue = value.target;
    }
  }

  // escalation_delay_in_minutes - computed: false, optional: false, required: true
  private _escalationDelayInMinutes?: number; 
  public get escalationDelayInMinutes() {
    return this.getNumberAttribute('escalation_delay_in_minutes');
  }
  public set escalationDelayInMinutes(value: number) {
    this._escalationDelayInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationDelayInMinutesInput() {
    return this._escalationDelayInMinutes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target - computed: false, optional: false, required: true
  private _target = new EscalationPolicyRuleTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: EscalationPolicyRuleTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class EscalationPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EscalationPolicyRuleOutputReference {
    return new EscalationPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy pagerduty_escalation_policy}
*/
export class EscalationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_escalation_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy pagerduty_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.14.1',
        providerVersionConstraint: '~> 2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._numLoops = config.numLoops;
    this._teams = config.teams;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_loops - computed: false, optional: true, required: false
  private _numLoops?: number; 
  public get numLoops() {
    return this.getNumberAttribute('num_loops');
  }
  public set numLoops(value: number) {
    this._numLoops = value;
  }
  public resetNumLoops() {
    this._numLoops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLoopsInput() {
    return this._numLoops;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new EscalationPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: EscalationPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_loops: cdktf.numberToTerraform(this._numLoops),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      rule: cdktf.listMapper(escalationPolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}
