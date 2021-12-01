// https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#disabled RulesetRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
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
  readonly actions?: RulesetRuleActions;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#conditions RulesetRule#conditions}
  */
  readonly conditions?: RulesetRuleConditions;
  /**
  * time_frame block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#time_frame RulesetRule#time_frame}
  */
  readonly timeFrame?: RulesetRuleTimeFrame;
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

export function rulesetRuleActionsAnnotateToTerraform(struct?: RulesetRuleActionsAnnotate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsEventActionToTerraform(struct?: RulesetRuleActionsEventAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsExtractionsToTerraform(struct?: RulesetRuleActionsExtractions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsPriorityToTerraform(struct?: RulesetRuleActionsPriority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsRouteToTerraform(struct?: RulesetRuleActionsRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsSeverityToTerraform(struct?: RulesetRuleActionsSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly value?: boolean | cdktf.IResolvable;
}

export function rulesetRuleActionsSuppressToTerraform(struct?: RulesetRuleActionsSuppress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsSuspendToTerraform(struct?: RulesetRuleActionsSuspend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleActionsToTerraform(struct?: RulesetRuleActionsOutputReference | RulesetRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class RulesetRuleActionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RulesetRuleActions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._annotate) {
      hasAnyValues = true;
      internalValueResult.annotate = this._annotate;
    }
    if (this._eventAction) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._extractions) {
      hasAnyValues = true;
      internalValueResult.extractions = this._extractions;
    }
    if (this._priority) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._route) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._severity) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._suppress) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress;
    }
    if (this._suspend) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleActions | undefined) {
    if (value === undefined) {
      this._annotate = undefined;
      this._eventAction = undefined;
      this._extractions = undefined;
      this._priority = undefined;
      this._route = undefined;
      this._severity = undefined;
      this._suppress = undefined;
      this._suspend = undefined;
    }
    else {
      this._annotate = value.annotate;
      this._eventAction = value.eventAction;
      this._extractions = value.extractions;
      this._priority = value.priority;
      this._route = value.route;
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: RulesetRuleActionsAnnotate[]; 
  public get annotate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotate') as any;
  }
  public set annotate(value: RulesetRuleActionsAnnotate[]) {
    this._annotate = value;
  }
  public resetAnnotate() {
    this._annotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotateInput() {
    return this._annotate;
  }

  // event_action - computed: false, optional: true, required: false
  private _eventAction?: RulesetRuleActionsEventAction[]; 
  public get eventAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_action') as any;
  }
  public set eventAction(value: RulesetRuleActionsEventAction[]) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // extractions - computed: false, optional: true, required: false
  private _extractions?: RulesetRuleActionsExtractions[]; 
  public get extractions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extractions') as any;
  }
  public set extractions(value: RulesetRuleActionsExtractions[]) {
    this._extractions = value;
  }
  public resetExtractions() {
    this._extractions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionsInput() {
    return this._extractions;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: RulesetRuleActionsPriority[]; 
  public get priority() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('priority') as any;
  }
  public set priority(value: RulesetRuleActionsPriority[]) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route - computed: false, optional: true, required: false
  private _route?: RulesetRuleActionsRoute[]; 
  public get route() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: RulesetRuleActionsRoute[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: RulesetRuleActionsSeverity[]; 
  public get severity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('severity') as any;
  }
  public set severity(value: RulesetRuleActionsSeverity[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress?: RulesetRuleActionsSuppress[]; 
  public get suppress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suppress') as any;
  }
  public set suppress(value: RulesetRuleActionsSuppress[]) {
    this._suppress = value;
  }
  public resetSuppress() {
    this._suppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: RulesetRuleActionsSuspend[]; 
  public get suspend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suspend') as any;
  }
  public set suspend(value: RulesetRuleActionsSuspend[]) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
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

export function rulesetRuleConditionsSubconditionsParameterToTerraform(struct?: RulesetRuleConditionsSubconditionsParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleConditionsSubconditionsToTerraform(struct?: RulesetRuleConditionsSubconditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleConditionsToTerraform(struct?: RulesetRuleConditionsOutputReference | RulesetRuleConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    subconditions: cdktf.listMapper(rulesetRuleConditionsSubconditionsToTerraform)(struct!.subconditions),
  }
}

export class RulesetRuleConditionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RulesetRuleConditions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._operator) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subconditions) {
      hasAnyValues = true;
      internalValueResult.subconditions = this._subconditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleConditions | undefined) {
    if (value === undefined) {
      this._operator = undefined;
      this._subconditions = undefined;
    }
    else {
      this._operator = value.operator;
      this._subconditions = value.subconditions;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // subconditions - computed: false, optional: true, required: false
  private _subconditions?: RulesetRuleConditionsSubconditions[]; 
  public get subconditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subconditions') as any;
  }
  public set subconditions(value: RulesetRuleConditionsSubconditions[]) {
    this._subconditions = value;
  }
  public resetSubconditions() {
    this._subconditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subconditionsInput() {
    return this._subconditions;
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

export function rulesetRuleTimeFrameActiveBetweenToTerraform(struct?: RulesetRuleTimeFrameActiveBetween): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleTimeFrameScheduledWeeklyToTerraform(struct?: RulesetRuleTimeFrameScheduledWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleTimeFrameToTerraform(struct?: RulesetRuleTimeFrameOutputReference | RulesetRuleTimeFrame): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_between: cdktf.listMapper(rulesetRuleTimeFrameActiveBetweenToTerraform)(struct!.activeBetween),
    scheduled_weekly: cdktf.listMapper(rulesetRuleTimeFrameScheduledWeeklyToTerraform)(struct!.scheduledWeekly),
  }
}

export class RulesetRuleTimeFrameOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RulesetRuleTimeFrame | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._activeBetween) {
      hasAnyValues = true;
      internalValueResult.activeBetween = this._activeBetween;
    }
    if (this._scheduledWeekly) {
      hasAnyValues = true;
      internalValueResult.scheduledWeekly = this._scheduledWeekly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleTimeFrame | undefined) {
    if (value === undefined) {
      this._activeBetween = undefined;
      this._scheduledWeekly = undefined;
    }
    else {
      this._activeBetween = value.activeBetween;
      this._scheduledWeekly = value.scheduledWeekly;
    }
  }

  // active_between - computed: false, optional: true, required: false
  private _activeBetween?: RulesetRuleTimeFrameActiveBetween[]; 
  public get activeBetween() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('active_between') as any;
  }
  public set activeBetween(value: RulesetRuleTimeFrameActiveBetween[]) {
    this._activeBetween = value;
  }
  public resetActiveBetween() {
    this._activeBetween = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBetweenInput() {
    return this._activeBetween;
  }

  // scheduled_weekly - computed: false, optional: true, required: false
  private _scheduledWeekly?: RulesetRuleTimeFrameScheduledWeekly[]; 
  public get scheduledWeekly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scheduled_weekly') as any;
  }
  public set scheduledWeekly(value: RulesetRuleTimeFrameScheduledWeekly[]) {
    this._scheduledWeekly = value;
  }
  public resetScheduledWeekly() {
    this._scheduledWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledWeeklyInput() {
    return this._scheduledWeekly;
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

export function rulesetRuleVariableParametersToTerraform(struct?: RulesetRuleVariableParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function rulesetRuleVariableToTerraform(struct?: RulesetRuleVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_ruleset_rule";

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
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._timeFrame.internalValue = config.timeFrame;
    this._variable = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // ruleset - computed: false, optional: false, required: true
  private _ruleset?: string; 
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }
  public set ruleset(value: string) {
    this._ruleset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RulesetRuleActionsOutputReference(this as any, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: RulesetRuleActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RulesetRuleConditionsOutputReference(this as any, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RulesetRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // time_frame - computed: false, optional: true, required: false
  private _timeFrame = new RulesetRuleTimeFrameOutputReference(this as any, "time_frame", true);
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: RulesetRuleTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  public resetTimeFrame() {
    this._timeFrame.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: RulesetRuleVariable[]; 
  public get variable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('variable') as any;
  }
  public set variable(value: RulesetRuleVariable[]) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      position: cdktf.numberToTerraform(this._position),
      ruleset: cdktf.stringToTerraform(this._ruleset),
      actions: rulesetRuleActionsToTerraform(this._actions.internalValue),
      conditions: rulesetRuleConditionsToTerraform(this._conditions.internalValue),
      time_frame: rulesetRuleTimeFrameToTerraform(this._timeFrame.internalValue),
      variable: cdktf.listMapper(rulesetRuleVariableToTerraform)(this._variable),
    };
  }
}
