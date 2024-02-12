/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentWorkflowTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}
  */
  readonly subscribedToAllServices: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}
  */
  readonly workflow: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger pagerduty_incident_workflow_trigger}
*/
export class IncidentWorkflowTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_incident_workflow_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentWorkflowTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentWorkflowTrigger to import
  * @param importFromId The id of the existing IncidentWorkflowTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentWorkflowTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_incident_workflow_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.7.1/docs/resources/incident_workflow_trigger pagerduty_incident_workflow_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentWorkflowTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentWorkflowTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_incident_workflow_trigger',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.7.1',
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
    this._condition = config.condition;
    this._id = config.id;
    this._services = config.services;
    this._subscribedToAllServices = config.subscribedToAllServices;
    this._type = config.type;
    this._workflow = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // subscribed_to_all_services - computed: false, optional: false, required: true
  private _subscribedToAllServices?: boolean | cdktf.IResolvable; 
  public get subscribedToAllServices() {
    return this.getBooleanAttribute('subscribed_to_all_services');
  }
  public set subscribedToAllServices(value: boolean | cdktf.IResolvable) {
    this._subscribedToAllServices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribedToAllServicesInput() {
    return this._subscribedToAllServices;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: cdktf.stringToTerraform(this._condition),
      id: cdktf.stringToTerraform(this._id),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      subscribed_to_all_services: cdktf.booleanToTerraform(this._subscribedToAllServices),
      type: cdktf.stringToTerraform(this._type),
      workflow: cdktf.stringToTerraform(this._workflow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subscribed_to_all_services: {
        value: cdktf.booleanToHclTerraform(this._subscribedToAllServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow: {
        value: cdktf.stringToHclTerraform(this._workflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
