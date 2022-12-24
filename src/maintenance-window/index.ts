// https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#description MaintenanceWindow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#end_time MaintenanceWindow#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#services MaintenanceWindow#services}
  */
  readonly services: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window#start_time MaintenanceWindow#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window pagerduty_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_maintenance_window";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window pagerduty_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.8.1',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._services = config.services;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }
}
