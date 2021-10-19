// https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#action_json EventRule#action_json}
  */
  readonly actionJson: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#advanced_condition_json EventRule#advanced_condition_json}
  */
  readonly advancedConditionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#condition_json EventRule#condition_json}
  */
  readonly conditionJson: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html pagerduty_event_rule}
*/
export class EventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_event_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html pagerduty_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionJson = config.actionJson;
    this._advancedConditionJson = config.advancedConditionJson;
    this._conditionJson = config.conditionJson;
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
    return this._actionJson
  }

  // advanced_condition_json - computed: false, optional: true, required: false
  private _advancedConditionJson?: string | undefined; 
  public get advancedConditionJson() {
    return this.getStringAttribute('advanced_condition_json');
  }
  public set advancedConditionJson(value: string | undefined) {
    this._advancedConditionJson = value;
  }
  public resetAdvancedConditionJson() {
    this._advancedConditionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConditionJsonInput() {
    return this._advancedConditionJson
  }

  // catch_all - computed: true, optional: false, required: false
  public get catchAll() {
    return this.getBooleanAttribute('catch_all') as any;
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
    return this._conditionJson
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_json: cdktf.stringToTerraform(this._actionJson),
      advanced_condition_json: cdktf.stringToTerraform(this._advancedConditionJson),
      condition_json: cdktf.stringToTerraform(this._conditionJson),
    };
  }
}
