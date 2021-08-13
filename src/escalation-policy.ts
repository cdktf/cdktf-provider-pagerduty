// https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#description EscalationPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#name EscalationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#num_loops EscalationPolicy#num_loops}
  */
  readonly numLoops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#teams EscalationPolicy#teams}
  */
  readonly teams?: string[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#rule EscalationPolicy#rule}
  */
  readonly rule: EscalationPolicyRule[];
}
export interface EscalationPolicyRuleTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#id EscalationPolicy#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#type EscalationPolicy#type}
  */
  readonly type?: string;
}

function escalationPolicyRuleTargetToTerraform(struct?: EscalationPolicyRuleTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EscalationPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}
  */
  readonly escalationDelayInMinutes: number;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#target EscalationPolicy#target}
  */
  readonly target: EscalationPolicyRuleTarget[];
}

function escalationPolicyRuleToTerraform(struct?: EscalationPolicyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    escalation_delay_in_minutes: cdktf.numberToTerraform(struct!.escalationDelayInMinutes),
    target: cdktf.listMapper(escalationPolicyRuleTargetToTerraform)(struct!.target),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html pagerduty_escalation_policy}
*/
export class EscalationPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html pagerduty_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._numLoops = config.numLoops;
    this._teams = config.teams;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // num_loops - computed: false, optional: true, required: false
  private _numLoops?: number;
  public get numLoops() {
    return this.getNumberAttribute('num_loops');
  }
  public set numLoops(value: number ) {
    this._numLoops = value;
  }
  public resetNumLoops() {
    this._numLoops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLoopsInput() {
    return this._numLoops
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[];
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[] ) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams
  }

  // rule - computed: false, optional: false, required: true
  private _rule: EscalationPolicyRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: EscalationPolicyRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      num_loops: cdktf.numberToTerraform(this._numLoops),
      teams: cdktf.listMapper(cdktf.stringToTerraform)(this._teams),
      rule: cdktf.listMapper(escalationPolicyRuleToTerraform)(this._rule),
    };
  }
}
