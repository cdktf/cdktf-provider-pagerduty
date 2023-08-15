/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsActionTeamAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association#action_id AutomationActionsActionTeamAssociation#action_id}
  */
  readonly actionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association#id AutomationActionsActionTeamAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association#team_id AutomationActionsActionTeamAssociation#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association pagerduty_automation_actions_action_team_association}
*/
export class AutomationActionsActionTeamAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_action_team_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/automation_actions_action_team_association pagerduty_automation_actions_action_team_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationActionsActionTeamAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationActionsActionTeamAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_action_team_association',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.15.3',
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
    this._actionId = config.actionId;
    this._id = config.id;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.stringToTerraform(this._actionId),
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
