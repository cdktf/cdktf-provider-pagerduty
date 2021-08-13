// https://www.terraform.io/docs/providers/pagerduty/r/schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#description Schedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#name Schedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#overflow Schedule#overflow}
  */
  readonly overflow?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#time_zone Schedule#time_zone}
  */
  readonly timeZone: string;
  /**
  * layer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#layer Schedule#layer}
  */
  readonly layer: ScheduleLayer[];
}
export interface ScheduleLayerRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#duration_seconds Schedule#duration_seconds}
  */
  readonly durationSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start_day_of_week Schedule#start_day_of_week}
  */
  readonly startDayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start_time_of_day Schedule#start_time_of_day}
  */
  readonly startTimeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#type Schedule#type}
  */
  readonly type: string;
}

function scheduleLayerRestrictionToTerraform(struct?: ScheduleLayerRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    start_day_of_week: cdktf.numberToTerraform(struct!.startDayOfWeek),
    start_time_of_day: cdktf.stringToTerraform(struct!.startTimeOfDay),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ScheduleLayer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#end Schedule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#name Schedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#rotation_turn_length_seconds Schedule#rotation_turn_length_seconds}
  */
  readonly rotationTurnLengthSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#rotation_virtual_start Schedule#rotation_virtual_start}
  */
  readonly rotationVirtualStart: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start Schedule#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#users Schedule#users}
  */
  readonly users: string[];
  /**
  * restriction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#restriction Schedule#restriction}
  */
  readonly restriction?: ScheduleLayerRestriction[];
}

function scheduleLayerToTerraform(struct?: ScheduleLayer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    name: cdktf.stringToTerraform(struct!.name),
    rotation_turn_length_seconds: cdktf.numberToTerraform(struct!.rotationTurnLengthSeconds),
    rotation_virtual_start: cdktf.stringToTerraform(struct!.rotationVirtualStart),
    start: cdktf.stringToTerraform(struct!.start),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
    restriction: cdktf.listMapper(scheduleLayerRestrictionToTerraform)(struct!.restriction),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html pagerduty_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html pagerduty_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_schedule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._overflow = config.overflow;
    this._timeZone = config.timeZone;
    this._layer = config.layer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // overflow - computed: false, optional: true, required: false
  private _overflow?: boolean;
  public get overflow() {
    return this.getBooleanAttribute('overflow');
  }
  public set overflow(value: boolean ) {
    this._overflow = value;
  }
  public resetOverflow() {
    this._overflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowInput() {
    return this._overflow
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // layer - computed: false, optional: false, required: true
  private _layer: ScheduleLayer[];
  public get layer() {
    return this.interpolationForAttribute('layer') as any;
  }
  public set layer(value: ScheduleLayer[]) {
    this._layer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      overflow: cdktf.booleanToTerraform(this._overflow),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      layer: cdktf.listMapper(scheduleLayerToTerraform)(this._layer),
    };
  }
}
