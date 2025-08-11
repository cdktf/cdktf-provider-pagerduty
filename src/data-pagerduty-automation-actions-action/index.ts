/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyAutomationActionsActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}
  */
  readonly actionClassification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#allow_invocation_from_event_orchestration DataPagerdutyAutomationActionsAction#allow_invocation_from_event_orchestration}
  */
  readonly allowInvocationFromEventOrchestration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#allow_invocation_manually DataPagerdutyAutomationActionsAction#allow_invocation_manually}
  */
  readonly allowInvocationManually?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}
  */
  readonly creationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#map_to_all_services DataPagerdutyAutomationActionsAction#map_to_all_services}
  */
  readonly mapToAllServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#only_invocable_on_unresolved_incidents DataPagerdutyAutomationActionsAction#only_invocable_on_unresolved_incidents}
  */
  readonly onlyInvocableOnUnresolvedIncidents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}
  */
  readonly runnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}
  */
  readonly runnerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}
  */
  readonly type?: string;
}
export interface DataPagerdutyAutomationActionsActionActionDataReference {
}

export function dataPagerdutyAutomationActionsActionActionDataReferenceToTerraform(struct?: DataPagerdutyAutomationActionsActionActionDataReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPagerdutyAutomationActionsActionActionDataReferenceToHclTerraform(struct?: DataPagerdutyAutomationActionsActionActionDataReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPagerdutyAutomationActionsActionActionDataReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyAutomationActionsActionActionDataReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_command - computed: true, optional: false, required: false
  public get invocationCommand() {
    return this.getStringAttribute('invocation_command');
  }

  // process_automation_job_arguments - computed: true, optional: false, required: false
  public get processAutomationJobArguments() {
    return this.getStringAttribute('process_automation_job_arguments');
  }

  // process_automation_job_id - computed: true, optional: false, required: false
  public get processAutomationJobId() {
    return this.getStringAttribute('process_automation_job_id');
  }

  // process_automation_node_filter - computed: true, optional: false, required: false
  public get processAutomationNodeFilter() {
    return this.getStringAttribute('process_automation_node_filter');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataPagerdutyAutomationActionsActionActionDataReferenceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference {
    return new DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action pagerduty_automation_actions_action}
*/
export class DataPagerdutyAutomationActionsAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_automation_actions_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyAutomationActionsAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyAutomationActionsAction to import
  * @param importFromId The id of the existing DataPagerdutyAutomationActionsAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyAutomationActionsAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_automation_actions_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/automation_actions_action pagerduty_automation_actions_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyAutomationActionsActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyAutomationActionsActionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_automation_actions_action',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.28.1',
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
    this._allowInvocationFromEventOrchestration = config.allowInvocationFromEventOrchestration;
    this._allowInvocationManually = config.allowInvocationManually;
    this._creationTime = config.creationTime;
    this._description = config.description;
    this._id = config.id;
    this._mapToAllServices = config.mapToAllServices;
    this._modifyTime = config.modifyTime;
    this._onlyInvocableOnUnresolvedIncidents = config.onlyInvocableOnUnresolvedIncidents;
    this._runnerId = config.runnerId;
    this._runnerType = config.runnerType;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_classification - computed: true, optional: true, required: false
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

  // action_data_reference - computed: true, optional: false, required: false
  private _actionDataReference = new DataPagerdutyAutomationActionsActionActionDataReferenceList(this, "action_data_reference", false);
  public get actionDataReference() {
    return this._actionDataReference;
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // allow_invocation_from_event_orchestration - computed: true, optional: true, required: false
  private _allowInvocationFromEventOrchestration?: boolean | cdktf.IResolvable; 
  public get allowInvocationFromEventOrchestration() {
    return this.getBooleanAttribute('allow_invocation_from_event_orchestration');
  }
  public set allowInvocationFromEventOrchestration(value: boolean | cdktf.IResolvable) {
    this._allowInvocationFromEventOrchestration = value;
  }
  public resetAllowInvocationFromEventOrchestration() {
    this._allowInvocationFromEventOrchestration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInvocationFromEventOrchestrationInput() {
    return this._allowInvocationFromEventOrchestration;
  }

  // allow_invocation_manually - computed: true, optional: true, required: false
  private _allowInvocationManually?: boolean | cdktf.IResolvable; 
  public get allowInvocationManually() {
    return this.getBooleanAttribute('allow_invocation_manually');
  }
  public set allowInvocationManually(value: boolean | cdktf.IResolvable) {
    this._allowInvocationManually = value;
  }
  public resetAllowInvocationManually() {
    this._allowInvocationManually = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInvocationManuallyInput() {
    return this._allowInvocationManually;
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

  // map_to_all_services - computed: true, optional: true, required: false
  private _mapToAllServices?: boolean | cdktf.IResolvable; 
  public get mapToAllServices() {
    return this.getBooleanAttribute('map_to_all_services');
  }
  public set mapToAllServices(value: boolean | cdktf.IResolvable) {
    this._mapToAllServices = value;
  }
  public resetMapToAllServices() {
    this._mapToAllServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToAllServicesInput() {
    return this._mapToAllServices;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // only_invocable_on_unresolved_incidents - computed: true, optional: true, required: false
  private _onlyInvocableOnUnresolvedIncidents?: boolean | cdktf.IResolvable; 
  public get onlyInvocableOnUnresolvedIncidents() {
    return this.getBooleanAttribute('only_invocable_on_unresolved_incidents');
  }
  public set onlyInvocableOnUnresolvedIncidents(value: boolean | cdktf.IResolvable) {
    this._onlyInvocableOnUnresolvedIncidents = value;
  }
  public resetOnlyInvocableOnUnresolvedIncidents() {
    this._onlyInvocableOnUnresolvedIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyInvocableOnUnresolvedIncidentsInput() {
    return this._onlyInvocableOnUnresolvedIncidents;
  }

  // runner_id - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_classification: cdktf.stringToTerraform(this._actionClassification),
      allow_invocation_from_event_orchestration: cdktf.booleanToTerraform(this._allowInvocationFromEventOrchestration),
      allow_invocation_manually: cdktf.booleanToTerraform(this._allowInvocationManually),
      creation_time: cdktf.stringToTerraform(this._creationTime),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      map_to_all_services: cdktf.booleanToTerraform(this._mapToAllServices),
      modify_time: cdktf.stringToTerraform(this._modifyTime),
      only_invocable_on_unresolved_incidents: cdktf.booleanToTerraform(this._onlyInvocableOnUnresolvedIncidents),
      runner_id: cdktf.stringToTerraform(this._runnerId),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_classification: {
        value: cdktf.stringToHclTerraform(this._actionClassification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_invocation_from_event_orchestration: {
        value: cdktf.booleanToHclTerraform(this._allowInvocationFromEventOrchestration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_invocation_manually: {
        value: cdktf.booleanToHclTerraform(this._allowInvocationManually),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creation_time: {
        value: cdktf.stringToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      map_to_all_services: {
        value: cdktf.booleanToHclTerraform(this._mapToAllServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      modify_time: {
        value: cdktf.stringToHclTerraform(this._modifyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_invocable_on_unresolved_incidents: {
        value: cdktf.booleanToHclTerraform(this._onlyInvocableOnUnresolvedIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runner_id: {
        value: cdktf.stringToHclTerraform(this._runnerId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
