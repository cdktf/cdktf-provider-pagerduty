// https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsRunnerTeamAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}
  */
  readonly runnerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association pagerduty_automation_actions_runner_team_association}
*/
export class AutomationActionsRunnerTeamAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_runner_team_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner_team_association pagerduty_automation_actions_runner_team_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationActionsRunnerTeamAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationActionsRunnerTeamAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_runner_team_association',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.14.2',
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
    this._id = config.id;
    this._runnerId = config.runnerId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // runner_id - computed: false, optional: false, required: true
  private _runnerId?: string; 
  public get runnerId() {
    return this.getStringAttribute('runner_id');
  }
  public set runnerId(value: string) {
    this._runnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerIdInput() {
    return this._runnerId;
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
      id: cdktf.stringToTerraform(this._id),
      runner_id: cdktf.stringToTerraform(this._runnerId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
