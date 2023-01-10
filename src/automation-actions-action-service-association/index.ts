// https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsActionServiceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association#action_id AutomationActionsActionServiceAssociation#action_id}
  */
  readonly actionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association#id AutomationActionsActionServiceAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association#service_id AutomationActionsActionServiceAssociation#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association pagerduty_automation_actions_action_service_association}
*/
export class AutomationActionsActionServiceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_action_service_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_action_service_association pagerduty_automation_actions_action_service_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationActionsActionServiceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationActionsActionServiceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_action_service_association',
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
    this._actionId = config.actionId;
    this._id = config.id;
    this._serviceId = config.serviceId;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.stringToTerraform(this._actionId),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }
}
