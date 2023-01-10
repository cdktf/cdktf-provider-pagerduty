// https://www.terraform.io/docs/providers/pagerduty/r/event_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule#action_json EventRule#action_json}
  */
  readonly actionJson: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule#advanced_condition_json EventRule#advanced_condition_json}
  */
  readonly advancedConditionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule#condition_json EventRule#condition_json}
  */
  readonly conditionJson: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule#id EventRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule pagerduty_event_rule}
*/
export class EventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule pagerduty_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.9.1',
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
    this._actionJson = config.actionJson;
    this._advancedConditionJson = config.advancedConditionJson;
    this._conditionJson = config.conditionJson;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_json - computed: false, optional: false, required: true
  private _actionJson?: string; 
  public get actionJson() {
    return this.getStringAttribute('action_json');
  }
  public set actionJson(value: string) {
    this._actionJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJsonInput() {
    return this._actionJson;
  }

  // advanced_condition_json - computed: false, optional: true, required: false
  private _advancedConditionJson?: string; 
  public get advancedConditionJson() {
    return this.getStringAttribute('advanced_condition_json');
  }
  public set advancedConditionJson(value: string) {
    this._advancedConditionJson = value;
  }
  public resetAdvancedConditionJson() {
    this._advancedConditionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConditionJsonInput() {
    return this._advancedConditionJson;
  }

  // catch_all - computed: true, optional: false, required: false
  public get catchAll() {
    return this.getBooleanAttribute('catch_all');
  }

  // condition_json - computed: false, optional: false, required: true
  private _conditionJson?: string; 
  public get conditionJson() {
    return this.getStringAttribute('condition_json');
  }
  public set conditionJson(value: string) {
    this._conditionJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionJsonInput() {
    return this._conditionJson;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_json: cdktf.stringToTerraform(this._actionJson),
      advanced_condition_json: cdktf.stringToTerraform(this._advancedConditionJson),
      condition_json: cdktf.stringToTerraform(this._conditionJson),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
