// https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#disabled RulesetRule#disabled}
  */
  readonly disabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#position RulesetRule#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#ruleset RulesetRule#ruleset}
  */
  readonly ruleset: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#actions RulesetRule#actions}
  */
  readonly actions?: RulesetRuleActions[];
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#conditions RulesetRule#conditions}
  */
  readonly conditions?: RulesetRuleConditions[];
  /**
  * time_frame block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#time_frame RulesetRule#time_frame}
  */
  readonly timeFrame?: RulesetRuleTimeFrame[];
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#variable RulesetRule#variable}
  */
  readonly variable?: RulesetRuleVariable[];
}
export interface RulesetRuleActionsAnnotate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleActionsAnnotateToTerraform(struct?: RulesetRuleActionsAnnotate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsEventAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleActionsEventActionToTerraform(struct?: RulesetRuleActionsEventAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsExtractions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#regex RulesetRule#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#source RulesetRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#target RulesetRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#template RulesetRule#template}
  */
  readonly template?: string;
}

function rulesetRuleActionsExtractionsToTerraform(struct?: RulesetRuleActionsExtractions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    template: cdktf.stringToTerraform(struct!.template),
  }
}

export interface RulesetRuleActionsPriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleActionsPriorityToTerraform(struct?: RulesetRuleActionsPriority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleActionsRouteToTerraform(struct?: RulesetRuleActionsRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsSeverity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleActionsSeverityToTerraform(struct?: RulesetRuleActionsSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsSuppress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_time_amount RulesetRule#threshold_time_amount}
  */
  readonly thresholdTimeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_time_unit RulesetRule#threshold_time_unit}
  */
  readonly thresholdTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_value RulesetRule#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: boolean;
}

function rulesetRuleActionsSuppressToTerraform(struct?: RulesetRuleActionsSuppress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    threshold_time_amount: cdktf.numberToTerraform(struct!.thresholdTimeAmount),
    threshold_time_unit: cdktf.stringToTerraform(struct!.thresholdTimeUnit),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsSuspend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: number;
}

function rulesetRuleActionsSuspendToTerraform(struct?: RulesetRuleActionsSuspend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface RulesetRuleActions {
  /**
  * annotate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#annotate RulesetRule#annotate}
  */
  readonly annotate?: RulesetRuleActionsAnnotate[];
  /**
  * event_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#event_action RulesetRule#event_action}
  */
  readonly eventAction?: RulesetRuleActionsEventAction[];
  /**
  * extractions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#extractions RulesetRule#extractions}
  */
  readonly extractions?: RulesetRuleActionsExtractions[];
  /**
  * priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#priority RulesetRule#priority}
  */
  readonly priority?: RulesetRuleActionsPriority[];
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#route RulesetRule#route}
  */
  readonly route?: RulesetRuleActionsRoute[];
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#severity RulesetRule#severity}
  */
  readonly severity?: RulesetRuleActionsSeverity[];
  /**
  * suppress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#suppress RulesetRule#suppress}
  */
  readonly suppress?: RulesetRuleActionsSuppress[];
  /**
  * suspend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#suspend RulesetRule#suspend}
  */
  readonly suspend?: RulesetRuleActionsSuspend[];
}

function rulesetRuleActionsToTerraform(struct?: RulesetRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotate: cdktf.listMapper(rulesetRuleActionsAnnotateToTerraform)(struct!.annotate),
    event_action: cdktf.listMapper(rulesetRuleActionsEventActionToTerraform)(struct!.eventAction),
    extractions: cdktf.listMapper(rulesetRuleActionsExtractionsToTerraform)(struct!.extractions),
    priority: cdktf.listMapper(rulesetRuleActionsPriorityToTerraform)(struct!.priority),
    route: cdktf.listMapper(rulesetRuleActionsRouteToTerraform)(struct!.route),
    severity: cdktf.listMapper(rulesetRuleActionsSeverityToTerraform)(struct!.severity),
    suppress: cdktf.listMapper(rulesetRuleActionsSuppressToTerraform)(struct!.suppress),
    suspend: cdktf.listMapper(rulesetRuleActionsSuspendToTerraform)(struct!.suspend),
  }
}

export interface RulesetRuleConditionsSubconditionsParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleConditionsSubconditionsParameterToTerraform(struct?: RulesetRuleConditionsSubconditionsParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleConditionsSubconditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#parameter RulesetRule#parameter}
  */
  readonly parameter?: RulesetRuleConditionsSubconditionsParameter[];
}

function rulesetRuleConditionsSubconditionsToTerraform(struct?: RulesetRuleConditionsSubconditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    parameter: cdktf.listMapper(rulesetRuleConditionsSubconditionsParameterToTerraform)(struct!.parameter),
  }
}

export interface RulesetRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * subconditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#subconditions RulesetRule#subconditions}
  */
  readonly subconditions?: RulesetRuleConditionsSubconditions[];
}

function rulesetRuleConditionsToTerraform(struct?: RulesetRuleConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    subconditions: cdktf.listMapper(rulesetRuleConditionsSubconditionsToTerraform)(struct!.subconditions),
  }
}

export interface RulesetRuleTimeFrameActiveBetween {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#end_time RulesetRule#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
}

function rulesetRuleTimeFrameActiveBetweenToTerraform(struct?: RulesetRuleTimeFrameActiveBetween): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
  }
}

export interface RulesetRuleTimeFrameScheduledWeekly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#duration RulesetRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#timezone RulesetRule#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#weekdays RulesetRule#weekdays}
  */
  readonly weekdays?: number[];
}

function rulesetRuleTimeFrameScheduledWeeklyToTerraform(struct?: RulesetRuleTimeFrameScheduledWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    weekdays: cdktf.listMapper(cdktf.numberToTerraform)(struct!.weekdays),
  }
}

export interface RulesetRuleTimeFrame {
  /**
  * active_between block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#active_between RulesetRule#active_between}
  */
  readonly activeBetween?: RulesetRuleTimeFrameActiveBetween[];
  /**
  * scheduled_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#scheduled_weekly RulesetRule#scheduled_weekly}
  */
  readonly scheduledWeekly?: RulesetRuleTimeFrameScheduledWeekly[];
}

function rulesetRuleTimeFrameToTerraform(struct?: RulesetRuleTimeFrame): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_between: cdktf.listMapper(rulesetRuleTimeFrameActiveBetweenToTerraform)(struct!.activeBetween),
    scheduled_weekly: cdktf.listMapper(rulesetRuleTimeFrameScheduledWeeklyToTerraform)(struct!.scheduledWeekly),
  }
}

export interface RulesetRuleVariableParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}
  */
  readonly value?: string;
}

function rulesetRuleVariableParametersToTerraform(struct?: RulesetRuleVariableParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleVariable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#name RulesetRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#type RulesetRule#type}
  */
  readonly type?: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#parameters RulesetRule#parameters}
  */
  readonly parameters?: RulesetRuleVariableParameters[];
}

function rulesetRuleVariableToTerraform(struct?: RulesetRuleVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(rulesetRuleVariableParametersToTerraform)(struct!.parameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html pagerduty_ruleset_rule}
*/
export class RulesetRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html pagerduty_ruleset_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_ruleset_rule',
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
    this._ruleset = config.ruleset;
    this._actions = config.actions;
    this._conditions = config.conditions;
    this._timeFrame = config.timeFrame;
    this._variable = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean ) {
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

  // ruleset - computed: false, optional: false, required: true
  private _ruleset: string;
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }
  public set ruleset(value: string) {
    this._ruleset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: RulesetRuleActions[];
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: RulesetRuleActions[] ) {
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
  private _conditions?: RulesetRuleConditions[];
  public get conditions() {
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: RulesetRuleConditions[] ) {
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
  private _timeFrame?: RulesetRuleTimeFrame[];
  public get timeFrame() {
    return this.interpolationForAttribute('time_frame') as any;
  }
  public set timeFrame(value: RulesetRuleTimeFrame[] ) {
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
  private _variable?: RulesetRuleVariable[];
  public get variable() {
    return this.interpolationForAttribute('variable') as any;
  }
  public set variable(value: RulesetRuleVariable[] ) {
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
      ruleset: cdktf.stringToTerraform(this._ruleset),
      actions: cdktf.listMapper(rulesetRuleActionsToTerraform)(this._actions),
      conditions: cdktf.listMapper(rulesetRuleConditionsToTerraform)(this._conditions),
      time_frame: cdktf.listMapper(rulesetRuleTimeFrameToTerraform)(this._timeFrame),
      variable: cdktf.listMapper(rulesetRuleVariableToTerraform)(this._variable),
    };
  }
}
