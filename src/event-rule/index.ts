/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule#action_json EventRule#action_json}
  */
  readonly actionJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule#advanced_condition_json EventRule#advanced_condition_json}
  */
  readonly advancedConditionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule#condition_json EventRule#condition_json}
  */
  readonly conditionJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule#id EventRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule pagerduty_event_rule}
*/
export class EventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventRule to import
  * @param importFromId The id of the existing EventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_event_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_rule pagerduty_event_rule} Resource
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
        providerVersion: '3.11.0',
        providerVersionConstraint: '~> 3.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_json: {
        value: cdktf.stringToHclTerraform(this._actionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_condition_json: {
        value: cdktf.stringToHclTerraform(this._advancedConditionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_json: {
        value: cdktf.stringToHclTerraform(this._conditionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
