// https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceEventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#disabled ServiceEventRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#position ServiceEventRule#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#service ServiceEventRule#service}
  */
  readonly service: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#actions ServiceEventRule#actions}
  */
  readonly actions?: ServiceEventRuleActions[];
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#conditions ServiceEventRule#conditions}
  */
  readonly conditions?: ServiceEventRuleConditions[];
  /**
  * time_frame block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#time_frame ServiceEventRule#time_frame}
  */
  readonly timeFrame?: ServiceEventRuleTimeFrame[];
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#variable ServiceEventRule#variable}
  */
  readonly variable?: ServiceEventRuleVariable[];
}
export interface ServiceEventRuleActionsAnnotate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleActionsAnnotateToTerraform(struct?: ServiceEventRuleActionsAnnotate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActionsEventAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleActionsEventActionToTerraform(struct?: ServiceEventRuleActionsEventAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActionsExtractions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#regex ServiceEventRule#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#source ServiceEventRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#target ServiceEventRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#template ServiceEventRule#template}
  */
  readonly template?: string;
}

function serviceEventRuleActionsExtractionsToTerraform(struct?: ServiceEventRuleActionsExtractions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    template: cdktf.stringToTerraform(struct!.template),
  }
}

export interface ServiceEventRuleActionsPriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleActionsPriorityToTerraform(struct?: ServiceEventRuleActionsPriority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActionsSeverity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleActionsSeverityToTerraform(struct?: ServiceEventRuleActionsSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActionsSuppress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_time_amount ServiceEventRule#threshold_time_amount}
  */
  readonly thresholdTimeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_time_unit ServiceEventRule#threshold_time_unit}
  */
  readonly thresholdTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_value ServiceEventRule#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

function serviceEventRuleActionsSuppressToTerraform(struct?: ServiceEventRuleActionsSuppress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    threshold_time_amount: cdktf.numberToTerraform(struct!.thresholdTimeAmount),
    threshold_time_unit: cdktf.stringToTerraform(struct!.thresholdTimeUnit),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActionsSuspend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: number;
}

function serviceEventRuleActionsSuspendToTerraform(struct?: ServiceEventRuleActionsSuspend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleActions {
  /**
  * annotate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#annotate ServiceEventRule#annotate}
  */
  readonly annotate?: ServiceEventRuleActionsAnnotate[];
  /**
  * event_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#event_action ServiceEventRule#event_action}
  */
  readonly eventAction?: ServiceEventRuleActionsEventAction[];
  /**
  * extractions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#extractions ServiceEventRule#extractions}
  */
  readonly extractions?: ServiceEventRuleActionsExtractions[];
  /**
  * priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#priority ServiceEventRule#priority}
  */
  readonly priority?: ServiceEventRuleActionsPriority[];
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#severity ServiceEventRule#severity}
  */
  readonly severity?: ServiceEventRuleActionsSeverity[];
  /**
  * suppress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#suppress ServiceEventRule#suppress}
  */
  readonly suppress?: ServiceEventRuleActionsSuppress[];
  /**
  * suspend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#suspend ServiceEventRule#suspend}
  */
  readonly suspend?: ServiceEventRuleActionsSuspend[];
}

function serviceEventRuleActionsToTerraform(struct?: ServiceEventRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotate: cdktf.listMapper(serviceEventRuleActionsAnnotateToTerraform)(struct!.annotate),
    event_action: cdktf.listMapper(serviceEventRuleActionsEventActionToTerraform)(struct!.eventAction),
    extractions: cdktf.listMapper(serviceEventRuleActionsExtractionsToTerraform)(struct!.extractions),
    priority: cdktf.listMapper(serviceEventRuleActionsPriorityToTerraform)(struct!.priority),
    severity: cdktf.listMapper(serviceEventRuleActionsSeverityToTerraform)(struct!.severity),
    suppress: cdktf.listMapper(serviceEventRuleActionsSuppressToTerraform)(struct!.suppress),
    suspend: cdktf.listMapper(serviceEventRuleActionsSuspendToTerraform)(struct!.suspend),
  }
}

export interface ServiceEventRuleConditionsSubconditionsParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#path ServiceEventRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleConditionsSubconditionsParameterToTerraform(struct?: ServiceEventRuleConditionsSubconditionsParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleConditionsSubconditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#operator ServiceEventRule#operator}
  */
  readonly operator?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#parameter ServiceEventRule#parameter}
  */
  readonly parameter?: ServiceEventRuleConditionsSubconditionsParameter[];
}

function serviceEventRuleConditionsSubconditionsToTerraform(struct?: ServiceEventRuleConditionsSubconditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    parameter: cdktf.listMapper(serviceEventRuleConditionsSubconditionsParameterToTerraform)(struct!.parameter),
  }
}

export interface ServiceEventRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#operator ServiceEventRule#operator}
  */
  readonly operator?: string;
  /**
  * subconditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#subconditions ServiceEventRule#subconditions}
  */
  readonly subconditions?: ServiceEventRuleConditionsSubconditions[];
}

function serviceEventRuleConditionsToTerraform(struct?: ServiceEventRuleConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    subconditions: cdktf.listMapper(serviceEventRuleConditionsSubconditionsToTerraform)(struct!.subconditions),
  }
}

export interface ServiceEventRuleTimeFrameActiveBetween {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#end_time ServiceEventRule#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#start_time ServiceEventRule#start_time}
  */
  readonly startTime?: number;
}

function serviceEventRuleTimeFrameActiveBetweenToTerraform(struct?: ServiceEventRuleTimeFrameActiveBetween): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
  }
}

export interface ServiceEventRuleTimeFrameScheduledWeekly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#duration ServiceEventRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#start_time ServiceEventRule#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#timezone ServiceEventRule#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#weekdays ServiceEventRule#weekdays}
  */
  readonly weekdays?: number[];
}

function serviceEventRuleTimeFrameScheduledWeeklyToTerraform(struct?: ServiceEventRuleTimeFrameScheduledWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    weekdays: cdktf.listMapper(cdktf.numberToTerraform)(struct!.weekdays),
  }
}

export interface ServiceEventRuleTimeFrame {
  /**
  * active_between block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#active_between ServiceEventRule#active_between}
  */
  readonly activeBetween?: ServiceEventRuleTimeFrameActiveBetween[];
  /**
  * scheduled_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#scheduled_weekly ServiceEventRule#scheduled_weekly}
  */
  readonly scheduledWeekly?: ServiceEventRuleTimeFrameScheduledWeekly[];
}

function serviceEventRuleTimeFrameToTerraform(struct?: ServiceEventRuleTimeFrame): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_between: cdktf.listMapper(serviceEventRuleTimeFrameActiveBetweenToTerraform)(struct!.activeBetween),
    scheduled_weekly: cdktf.listMapper(serviceEventRuleTimeFrameScheduledWeeklyToTerraform)(struct!.scheduledWeekly),
  }
}

export interface ServiceEventRuleVariableParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#path ServiceEventRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

function serviceEventRuleVariableParametersToTerraform(struct?: ServiceEventRuleVariableParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceEventRuleVariable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#name ServiceEventRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#type ServiceEventRule#type}
  */
  readonly type?: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#parameters ServiceEventRule#parameters}
  */
  readonly parameters?: ServiceEventRuleVariableParameters[];
}

function serviceEventRuleVariableToTerraform(struct?: ServiceEventRuleVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(serviceEventRuleVariableParametersToTerraform)(struct!.parameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html pagerduty_service_event_rule}
*/
export class ServiceEventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_service_event_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html pagerduty_service_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceEventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceEventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disabled = config.disabled;
    this._position = config.position;
    this._service = config.service;
    this._actions = config.actions;
    this._conditions = config.conditions;
    this._timeFrame = config.timeFrame;
    this._variable = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // position - computed: false, optional: true, required: false
  private _position?: number;
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number ) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: ServiceEventRuleActions[];
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: ServiceEventRuleActions[] ) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: ServiceEventRuleConditions[];
  public get conditions() {
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: ServiceEventRuleConditions[] ) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions
  }

  // time_frame - computed: false, optional: true, required: false
  private _timeFrame?: ServiceEventRuleTimeFrame[];
  public get timeFrame() {
    return this.interpolationForAttribute('time_frame') as any;
  }
  public set timeFrame(value: ServiceEventRuleTimeFrame[] ) {
    this._timeFrame = value;
  }
  public resetTimeFrame() {
    this._timeFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: ServiceEventRuleVariable[];
  public get variable() {
    return this.interpolationForAttribute('variable') as any;
  }
  public set variable(value: ServiceEventRuleVariable[] ) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      position: cdktf.numberToTerraform(this._position),
      service: cdktf.stringToTerraform(this._service),
      actions: cdktf.listMapper(serviceEventRuleActionsToTerraform)(this._actions),
      conditions: cdktf.listMapper(serviceEventRuleConditionsToTerraform)(this._conditions),
      time_frame: cdktf.listMapper(serviceEventRuleTimeFrameToTerraform)(this._timeFrame),
      variable: cdktf.listMapper(serviceEventRuleVariableToTerraform)(this._variable),
    };
  }
}
