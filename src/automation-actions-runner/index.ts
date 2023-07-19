/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}
  */
  readonly lastSeen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}
  */
  readonly runbookApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}
  */
  readonly runbookBaseUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}
  */
  readonly runnerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner pagerduty_automation_actions_runner}
*/
export class AutomationActionsRunner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_runner";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/automation_actions_runner pagerduty_automation_actions_runner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationActionsRunnerConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationActionsRunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_runner',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.15.1',
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
    this._lastSeen = config.lastSeen;
    this._name = config.name;
    this._runbookApiKey = config.runbookApiKey;
    this._runbookBaseUri = config.runbookBaseUri;
    this._runnerType = config.runnerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

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

  // last_seen - computed: true, optional: true, required: false
  private _lastSeen?: string; 
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }
  public set lastSeen(value: string) {
    this._lastSeen = value;
  }
  public resetLastSeen() {
    this._lastSeen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSeenInput() {
    return this._lastSeen;
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

  // runbook_api_key - computed: false, optional: true, required: false
  private _runbookApiKey?: string; 
  public get runbookApiKey() {
    return this.getStringAttribute('runbook_api_key');
  }
  public set runbookApiKey(value: string) {
    this._runbookApiKey = value;
  }
  public resetRunbookApiKey() {
    this._runbookApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookApiKeyInput() {
    return this._runbookApiKey;
  }

  // runbook_base_uri - computed: false, optional: true, required: false
  private _runbookBaseUri?: string; 
  public get runbookBaseUri() {
    return this.getStringAttribute('runbook_base_uri');
  }
  public set runbookBaseUri(value: string) {
    this._runbookBaseUri = value;
  }
  public resetRunbookBaseUri() {
    this._runbookBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookBaseUriInput() {
    return this._runbookBaseUri;
  }

  // runner_type - computed: false, optional: false, required: true
  private _runnerType?: string; 
  public get runnerType() {
    return this.getStringAttribute('runner_type');
  }
  public set runnerType(value: string) {
    this._runnerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerTypeInput() {
    return this._runnerType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_seen: cdktf.stringToTerraform(this._lastSeen),
      name: cdktf.stringToTerraform(this._name),
      runbook_api_key: cdktf.stringToTerraform(this._runbookApiKey),
      runbook_base_uri: cdktf.stringToTerraform(this._runbookBaseUri),
      runner_type: cdktf.stringToTerraform(this._runnerType),
    };
  }
}
