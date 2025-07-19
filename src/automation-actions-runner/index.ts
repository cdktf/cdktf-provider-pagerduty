/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}
  */
  readonly lastSeen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}
  */
  readonly runbookApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}
  */
  readonly runbookBaseUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}
  */
  readonly runnerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner pagerduty_automation_actions_runner}
*/
export class AutomationActionsRunner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_runner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationActionsRunner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationActionsRunner to import
  * @param importFromId The id of the existing AutomationActionsRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationActionsRunner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_automation_actions_runner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/automation_actions_runner pagerduty_automation_actions_runner} Resource
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
        providerVersion: '3.27.2',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      last_seen: {
        value: cdktf.stringToHclTerraform(this._lastSeen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_api_key: {
        value: cdktf.stringToHclTerraform(this._runbookApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_base_uri: {
        value: cdktf.stringToHclTerraform(this._runbookBaseUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_type: {
        value: cdktf.stringToHclTerraform(this._runnerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
