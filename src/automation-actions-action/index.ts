/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationActionsActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}
  */
  readonly actionClassification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}
  */
  readonly creationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#description AutomationActionsAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#id AutomationActionsAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#name AutomationActionsAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}
  */
  readonly runnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}
  */
  readonly runnerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#type AutomationActionsAction#type}
  */
  readonly type?: string;
  /**
  * action_data_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}
  */
  readonly actionDataReference: AutomationActionsActionActionDataReference;
}
export interface AutomationActionsActionActionDataReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}
  */
  readonly invocationCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}
  */
  readonly processAutomationJobArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}
  */
  readonly processAutomationJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}
  */
  readonly processAutomationNodeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#script AutomationActionsAction#script}
  */
  readonly script?: string;
}

export function automationActionsActionActionDataReferenceToTerraform(struct?: AutomationActionsActionActionDataReferenceOutputReference | AutomationActionsActionActionDataReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocation_command: cdktf.stringToTerraform(struct!.invocationCommand),
    process_automation_job_arguments: cdktf.stringToTerraform(struct!.processAutomationJobArguments),
    process_automation_job_id: cdktf.stringToTerraform(struct!.processAutomationJobId),
    process_automation_node_filter: cdktf.stringToTerraform(struct!.processAutomationNodeFilter),
    script: cdktf.stringToTerraform(struct!.script),
  }
}

export class AutomationActionsActionActionDataReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationActionsActionActionDataReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCommand = this._invocationCommand;
    }
    if (this._processAutomationJobArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.processAutomationJobArguments = this._processAutomationJobArguments;
    }
    if (this._processAutomationJobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processAutomationJobId = this._processAutomationJobId;
    }
    if (this._processAutomationNodeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.processAutomationNodeFilter = this._processAutomationNodeFilter;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationActionsActionActionDataReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invocationCommand = undefined;
      this._processAutomationJobArguments = undefined;
      this._processAutomationJobId = undefined;
      this._processAutomationNodeFilter = undefined;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invocationCommand = value.invocationCommand;
      this._processAutomationJobArguments = value.processAutomationJobArguments;
      this._processAutomationJobId = value.processAutomationJobId;
      this._processAutomationNodeFilter = value.processAutomationNodeFilter;
      this._script = value.script;
    }
  }

  // invocation_command - computed: false, optional: true, required: false
  private _invocationCommand?: string; 
  public get invocationCommand() {
    return this.getStringAttribute('invocation_command');
  }
  public set invocationCommand(value: string) {
    this._invocationCommand = value;
  }
  public resetInvocationCommand() {
    this._invocationCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationCommandInput() {
    return this._invocationCommand;
  }

  // process_automation_job_arguments - computed: false, optional: true, required: false
  private _processAutomationJobArguments?: string; 
  public get processAutomationJobArguments() {
    return this.getStringAttribute('process_automation_job_arguments');
  }
  public set processAutomationJobArguments(value: string) {
    this._processAutomationJobArguments = value;
  }
  public resetProcessAutomationJobArguments() {
    this._processAutomationJobArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processAutomationJobArgumentsInput() {
    return this._processAutomationJobArguments;
  }

  // process_automation_job_id - computed: false, optional: true, required: false
  private _processAutomationJobId?: string; 
  public get processAutomationJobId() {
    return this.getStringAttribute('process_automation_job_id');
  }
  public set processAutomationJobId(value: string) {
    this._processAutomationJobId = value;
  }
  public resetProcessAutomationJobId() {
    this._processAutomationJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processAutomationJobIdInput() {
    return this._processAutomationJobId;
  }

  // process_automation_node_filter - computed: false, optional: true, required: false
  private _processAutomationNodeFilter?: string; 
  public get processAutomationNodeFilter() {
    return this.getStringAttribute('process_automation_node_filter');
  }
  public set processAutomationNodeFilter(value: string) {
    this._processAutomationNodeFilter = value;
  }
  public resetProcessAutomationNodeFilter() {
    this._processAutomationNodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processAutomationNodeFilterInput() {
    return this._processAutomationNodeFilter;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action pagerduty_automation_actions_action}
*/
export class AutomationActionsAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationActionsAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationActionsAction to import
  * @param importFromId The id of the existing AutomationActionsAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationActionsAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_automation_actions_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.2/docs/resources/automation_actions_action pagerduty_automation_actions_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationActionsActionConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationActionsActionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_action',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.2.2',
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
    this._actionClassification = config.actionClassification;
    this._actionType = config.actionType;
    this._creationTime = config.creationTime;
    this._description = config.description;
    this._id = config.id;
    this._modifyTime = config.modifyTime;
    this._name = config.name;
    this._runnerId = config.runnerId;
    this._runnerType = config.runnerType;
    this._type = config.type;
    this._actionDataReference.internalValue = config.actionDataReference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_classification - computed: false, optional: true, required: false
  private _actionClassification?: string; 
  public get actionClassification() {
    return this.getStringAttribute('action_classification');
  }
  public set actionClassification(value: string) {
    this._actionClassification = value;
  }
  public resetActionClassification() {
    this._actionClassification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionClassificationInput() {
    return this._actionClassification;
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: string; 
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }
  public set creationTime(value: string) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
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

  // modify_time - computed: true, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
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

  // runner_id - computed: false, optional: true, required: false
  private _runnerId?: string; 
  public get runnerId() {
    return this.getStringAttribute('runner_id');
  }
  public set runnerId(value: string) {
    this._runnerId = value;
  }
  public resetRunnerId() {
    this._runnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerIdInput() {
    return this._runnerId;
  }

  // runner_type - computed: true, optional: true, required: false
  private _runnerType?: string; 
  public get runnerType() {
    return this.getStringAttribute('runner_type');
  }
  public set runnerType(value: string) {
    this._runnerType = value;
  }
  public resetRunnerType() {
    this._runnerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerTypeInput() {
    return this._runnerType;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // action_data_reference - computed: false, optional: false, required: true
  private _actionDataReference = new AutomationActionsActionActionDataReferenceOutputReference(this, "action_data_reference");
  public get actionDataReference() {
    return this._actionDataReference;
  }
  public putActionDataReference(value: AutomationActionsActionActionDataReference) {
    this._actionDataReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDataReferenceInput() {
    return this._actionDataReference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_classification: cdktf.stringToTerraform(this._actionClassification),
      action_type: cdktf.stringToTerraform(this._actionType),
      creation_time: cdktf.stringToTerraform(this._creationTime),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      modify_time: cdktf.stringToTerraform(this._modifyTime),
      name: cdktf.stringToTerraform(this._name),
      runner_id: cdktf.stringToTerraform(this._runnerId),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      type: cdktf.stringToTerraform(this._type),
      action_data_reference: automationActionsActionActionDataReferenceToTerraform(this._actionDataReference.internalValue),
    };
  }
}
