/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyAutomationActionsRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner#description DataPagerdutyAutomationActionsRunner#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner#id DataPagerdutyAutomationActionsRunner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner#last_seen DataPagerdutyAutomationActionsRunner#last_seen}
  */
  readonly lastSeen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner#runbook_base_uri DataPagerdutyAutomationActionsRunner#runbook_base_uri}
  */
  readonly runbookBaseUri?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner pagerduty_automation_actions_runner}
*/
export class DataPagerdutyAutomationActionsRunner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_runner";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/data-sources/automation_actions_runner pagerduty_automation_actions_runner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyAutomationActionsRunnerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyAutomationActionsRunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_runner',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.0.1',
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
    this._description = config.description;
    this._id = config.id;
    this._lastSeen = config.lastSeen;
    this._runbookBaseUri = config.runbookBaseUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_base_uri - computed: true, optional: true, required: false
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

  // runner_type - computed: true, optional: false, required: false
  public get runnerType() {
    return this.getStringAttribute('runner_type');
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
      runbook_base_uri: cdktf.stringToTerraform(this._runbookBaseUri),
    };
  }
}
