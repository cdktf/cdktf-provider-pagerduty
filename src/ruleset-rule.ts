// https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#disabled RulesetRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#position RulesetRule#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#ruleset RulesetRule#ruleset}
  */
  readonly ruleset: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#actions RulesetRule#actions}
  */
  readonly actions?: RulesetRuleActions;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#conditions RulesetRule#conditions}
  */
  readonly conditions?: RulesetRuleConditions;
  /**
  * time_frame block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#time_frame RulesetRule#time_frame}
  */
  readonly timeFrame?: RulesetRuleTimeFrame;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#variable RulesetRule#variable}
  */
  readonly variable?: RulesetRuleVariable[] | cdktf.IResolvable;
}
export interface RulesetRuleActionsAnnotate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsAnnotateToTerraform(struct?: RulesetRuleActionsAnnotate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsEventAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsEventActionToTerraform(struct?: RulesetRuleActionsEventAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsExtractions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#regex RulesetRule#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#source RulesetRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#target RulesetRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#template RulesetRule#template}
  */
  readonly template?: string;
}

export function rulesetRuleActionsExtractionsToTerraform(struct?: RulesetRuleActionsExtractions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsPriorityToTerraform(struct?: RulesetRuleActionsPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsRouteToTerraform(struct?: RulesetRuleActionsRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsSeverity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsSeverityToTerraform(struct?: RulesetRuleActionsSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface RulesetRuleActionsSuppress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}
  */
  readonly thresholdTimeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}
  */
  readonly thresholdTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#threshold_value RulesetRule#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function rulesetRuleActionsSuppressToTerraform(struct?: RulesetRuleActionsSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: number;
}

export function rulesetRuleActionsSuspendToTerraform(struct?: RulesetRuleActionsSuspend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#annotate RulesetRule#annotate}
  */
  readonly annotate?: RulesetRuleActionsAnnotate[] | cdktf.IResolvable;
  /**
  * event_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#event_action RulesetRule#event_action}
  */
  readonly eventAction?: RulesetRuleActionsEventAction[] | cdktf.IResolvable;
  /**
  * extractions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#extractions RulesetRule#extractions}
  */
  readonly extractions?: RulesetRuleActionsExtractions[] | cdktf.IResolvable;
  /**
  * priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#priority RulesetRule#priority}
  */
  readonly priority?: RulesetRuleActionsPriority[] | cdktf.IResolvable;
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#route RulesetRule#route}
  */
  readonly route?: RulesetRuleActionsRoute[] | cdktf.IResolvable;
  /**
  * severity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#severity RulesetRule#severity}
  */
  readonly severity?: RulesetRuleActionsSeverity[] | cdktf.IResolvable;
  /**
  * suppress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#suppress RulesetRule#suppress}
  */
  readonly suppress?: RulesetRuleActionsSuppress[] | cdktf.IResolvable;
  /**
  * suspend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#suspend RulesetRule#suspend}
  */
  readonly suspend?: RulesetRuleActionsSuspend[] | cdktf.IResolvable;
}

export function rulesetRuleActionsToTerraform(struct?: RulesetRuleActionsOutputReference | RulesetRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotate = this._annotate;
    }
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._extractions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractions = this._extractions;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._suppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _annotate?: RulesetRuleActionsAnnotate[] | cdktf.IResolvable; 
  public get annotate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotate');
  }
  public set annotate(value: RulesetRuleActionsAnnotate[] | cdktf.IResolvable) {
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
  private _eventAction?: RulesetRuleActionsEventAction[] | cdktf.IResolvable; 
  public get eventAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_action');
  }
  public set eventAction(value: RulesetRuleActionsEventAction[] | cdktf.IResolvable) {
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
  private _extractions?: RulesetRuleActionsExtractions[] | cdktf.IResolvable; 
  public get extractions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extractions');
  }
  public set extractions(value: RulesetRuleActionsExtractions[] | cdktf.IResolvable) {
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
  private _priority?: RulesetRuleActionsPriority[] | cdktf.IResolvable; 
  public get priority() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('priority');
  }
  public set priority(value: RulesetRuleActionsPriority[] | cdktf.IResolvable) {
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
  private _route?: RulesetRuleActionsRoute[] | cdktf.IResolvable; 
  public get route() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('route');
  }
  public set route(value: RulesetRuleActionsRoute[] | cdktf.IResolvable) {
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
  private _severity?: RulesetRuleActionsSeverity[] | cdktf.IResolvable; 
  public get severity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('severity');
  }
  public set severity(value: RulesetRuleActionsSeverity[] | cdktf.IResolvable) {
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
  private _suppress?: RulesetRuleActionsSuppress[] | cdktf.IResolvable; 
  public get suppress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suppress');
  }
  public set suppress(value: RulesetRuleActionsSuppress[] | cdktf.IResolvable) {
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
  private _suspend?: RulesetRuleActionsSuspend[] | cdktf.IResolvable; 
  public get suspend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suspend');
  }
  public set suspend(value: RulesetRuleActionsSuspend[] | cdktf.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleConditionsSubconditionsParameterToTerraform(struct?: RulesetRuleConditionsSubconditionsParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#parameter RulesetRule#parameter}
  */
  readonly parameter?: RulesetRuleConditionsSubconditionsParameter[] | cdktf.IResolvable;
}

export function rulesetRuleConditionsSubconditionsToTerraform(struct?: RulesetRuleConditionsSubconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * subconditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#subconditions RulesetRule#subconditions}
  */
  readonly subconditions?: RulesetRuleConditionsSubconditions[] | cdktf.IResolvable;
}

export function rulesetRuleConditionsToTerraform(struct?: RulesetRuleConditionsOutputReference | RulesetRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    subconditions: cdktf.listMapper(rulesetRuleConditionsSubconditionsToTerraform)(struct!.subconditions),
  }
}

export class RulesetRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subconditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.subconditions = this._subconditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._subconditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _subconditions?: RulesetRuleConditionsSubconditions[] | cdktf.IResolvable; 
  public get subconditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subconditions');
  }
  public set subconditions(value: RulesetRuleConditionsSubconditions[] | cdktf.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#end_time RulesetRule#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
}

export function rulesetRuleTimeFrameActiveBetweenToTerraform(struct?: RulesetRuleTimeFrameActiveBetween | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#duration RulesetRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#timezone RulesetRule#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#weekdays RulesetRule#weekdays}
  */
  readonly weekdays?: number[];
}

export function rulesetRuleTimeFrameScheduledWeeklyToTerraform(struct?: RulesetRuleTimeFrameScheduledWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#active_between RulesetRule#active_between}
  */
  readonly activeBetween?: RulesetRuleTimeFrameActiveBetween[] | cdktf.IResolvable;
  /**
  * scheduled_weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#scheduled_weekly RulesetRule#scheduled_weekly}
  */
  readonly scheduledWeekly?: RulesetRuleTimeFrameScheduledWeekly[] | cdktf.IResolvable;
}

export function rulesetRuleTimeFrameToTerraform(struct?: RulesetRuleTimeFrameOutputReference | RulesetRuleTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_between: cdktf.listMapper(rulesetRuleTimeFrameActiveBetweenToTerraform)(struct!.activeBetween),
    scheduled_weekly: cdktf.listMapper(rulesetRuleTimeFrameScheduledWeeklyToTerraform)(struct!.scheduledWeekly),
  }
}

export class RulesetRuleTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBetween !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBetween = this._activeBetween;
    }
    if (this._scheduledWeekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledWeekly = this._scheduledWeekly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRuleTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBetween = undefined;
      this._scheduledWeekly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBetween = value.activeBetween;
      this._scheduledWeekly = value.scheduledWeekly;
    }
  }

  // active_between - computed: false, optional: true, required: false
  private _activeBetween?: RulesetRuleTimeFrameActiveBetween[] | cdktf.IResolvable; 
  public get activeBetween() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('active_between');
  }
  public set activeBetween(value: RulesetRuleTimeFrameActiveBetween[] | cdktf.IResolvable) {
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
  private _scheduledWeekly?: RulesetRuleTimeFrameScheduledWeekly[] | cdktf.IResolvable; 
  public get scheduledWeekly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scheduled_weekly');
  }
  public set scheduledWeekly(value: RulesetRuleTimeFrameScheduledWeekly[] | cdktf.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleVariableParametersToTerraform(struct?: RulesetRuleVariableParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#name RulesetRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#type RulesetRule#type}
  */
  readonly type?: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule#parameters RulesetRule#parameters}
  */
  readonly parameters?: RulesetRuleVariableParameters[] | cdktf.IResolvable;
}

export function rulesetRuleVariableToTerraform(struct?: RulesetRuleVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule pagerduty_ruleset_rule}
*/
export class RulesetRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_ruleset_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule pagerduty_ruleset_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_ruleset_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '1.11.0',
        providerVersionConstraint: '~> 1.10'
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
    return this.getBooleanAttribute('disabled');
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
  private _actions = new RulesetRuleActionsOutputReference(this, "actions");
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
  private _conditions = new RulesetRuleConditionsOutputReference(this, "conditions");
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
  private _timeFrame = new RulesetRuleTimeFrameOutputReference(this, "time_frame");
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
  private _variable?: RulesetRuleVariable[] | cdktf.IResolvable; 
  public get variable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('variable');
  }
  public set variable(value: RulesetRuleVariable[] | cdktf.IResolvable) {
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
