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
  readonly actions?: ServiceEventRuleActions;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#conditions ServiceEventRule#conditions}
  */
  readonly conditions?: ServiceEventRuleConditions;
  /**
  * time_frame block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#time_frame ServiceEventRule#time_frame}
  */
  readonly timeFrame?: ServiceEventRuleTimeFrame;
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

export function serviceEventRuleActionsAnnotateToTerraform(struct?: ServiceEventRuleActionsAnnotate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleActionsEventActionToTerraform(struct?: ServiceEventRuleActionsEventAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleActionsExtractionsToTerraform(struct?: ServiceEventRuleActionsExtractions): any {
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

export interface ServiceEventRuleActionsPriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleActionsPriorityToTerraform(struct?: ServiceEventRuleActionsPriority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleActionsSeverityToTerraform(struct?: ServiceEventRuleActionsSeverity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleActionsSuppressToTerraform(struct?: ServiceEventRuleActionsSuppress): any {
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

export interface ServiceEventRuleActionsSuspend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}
  */
  readonly value?: number;
}

export function serviceEventRuleActionsSuspendToTerraform(struct?: ServiceEventRuleActionsSuspend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleActionsToTerraform(struct?: ServiceEventRuleActionsOutputReference | ServiceEventRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ServiceEventRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceEventRuleActions | undefined {
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

  public set internalValue(value: ServiceEventRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate = undefined;
      this._eventAction = undefined;
      this._extractions = undefined;
      this._priority = undefined;
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
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: ServiceEventRuleActionsAnnotate[]; 
  public get annotate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotate') as any;
  }
  public set annotate(value: ServiceEventRuleActionsAnnotate[]) {
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
  private _eventAction?: ServiceEventRuleActionsEventAction[]; 
  public get eventAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_action') as any;
  }
  public set eventAction(value: ServiceEventRuleActionsEventAction[]) {
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
  private _extractions?: ServiceEventRuleActionsExtractions[]; 
  public get extractions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extractions') as any;
  }
  public set extractions(value: ServiceEventRuleActionsExtractions[]) {
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
  private _priority?: ServiceEventRuleActionsPriority[]; 
  public get priority() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('priority') as any;
  }
  public set priority(value: ServiceEventRuleActionsPriority[]) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: ServiceEventRuleActionsSeverity[]; 
  public get severity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('severity') as any;
  }
  public set severity(value: ServiceEventRuleActionsSeverity[]) {
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
  private _suppress?: ServiceEventRuleActionsSuppress[]; 
  public get suppress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suppress') as any;
  }
  public set suppress(value: ServiceEventRuleActionsSuppress[]) {
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
  private _suspend?: ServiceEventRuleActionsSuspend[]; 
  public get suspend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('suspend') as any;
  }
  public set suspend(value: ServiceEventRuleActionsSuspend[]) {
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

export function serviceEventRuleConditionsSubconditionsParameterToTerraform(struct?: ServiceEventRuleConditionsSubconditionsParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleConditionsSubconditionsToTerraform(struct?: ServiceEventRuleConditionsSubconditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleConditionsToTerraform(struct?: ServiceEventRuleConditionsOutputReference | ServiceEventRuleConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    subconditions: cdktf.listMapper(serviceEventRuleConditionsSubconditionsToTerraform)(struct!.subconditions),
  }
}

export class ServiceEventRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceEventRuleConditions | undefined {
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

  public set internalValue(value: ServiceEventRuleConditions | undefined) {
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
  private _subconditions?: ServiceEventRuleConditionsSubconditions[]; 
  public get subconditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subconditions') as any;
  }
  public set subconditions(value: ServiceEventRuleConditionsSubconditions[]) {
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

export function serviceEventRuleTimeFrameActiveBetweenToTerraform(struct?: ServiceEventRuleTimeFrameActiveBetween): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleTimeFrameScheduledWeeklyToTerraform(struct?: ServiceEventRuleTimeFrameScheduledWeekly): any {
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

export function serviceEventRuleTimeFrameToTerraform(struct?: ServiceEventRuleTimeFrameOutputReference | ServiceEventRuleTimeFrame): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_between: cdktf.listMapper(serviceEventRuleTimeFrameActiveBetweenToTerraform)(struct!.activeBetween),
    scheduled_weekly: cdktf.listMapper(serviceEventRuleTimeFrameScheduledWeeklyToTerraform)(struct!.scheduledWeekly),
  }
}

export class ServiceEventRuleTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceEventRuleTimeFrame | undefined {
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

  public set internalValue(value: ServiceEventRuleTimeFrame | undefined) {
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
  private _activeBetween?: ServiceEventRuleTimeFrameActiveBetween[]; 
  public get activeBetween() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('active_between') as any;
  }
  public set activeBetween(value: ServiceEventRuleTimeFrameActiveBetween[]) {
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
  private _scheduledWeekly?: ServiceEventRuleTimeFrameScheduledWeekly[]; 
  public get scheduledWeekly() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scheduled_weekly') as any;
  }
  public set scheduledWeekly(value: ServiceEventRuleTimeFrameScheduledWeekly[]) {
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

export function serviceEventRuleVariableParametersToTerraform(struct?: ServiceEventRuleVariableParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function serviceEventRuleVariableToTerraform(struct?: ServiceEventRuleVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new ServiceEventRuleActionsOutputReference(this as any, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ServiceEventRuleActions) {
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
  private _conditions = new ServiceEventRuleConditionsOutputReference(this as any, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceEventRuleConditions) {
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
  private _timeFrame = new ServiceEventRuleTimeFrameOutputReference(this as any, "time_frame", true);
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: ServiceEventRuleTimeFrame) {
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
  private _variable?: ServiceEventRuleVariable[]; 
  public get variable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('variable') as any;
  }
  public set variable(value: ServiceEventRuleVariable[]) {
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
      service: cdktf.stringToTerraform(this._service),
      actions: serviceEventRuleActionsToTerraform(this._actions.internalValue),
      conditions: serviceEventRuleConditionsToTerraform(this._conditions.internalValue),
      time_frame: serviceEventRuleTimeFrameToTerraform(this._timeFrame.internalValue),
      variable: cdktf.listMapper(serviceEventRuleVariableToTerraform)(this._variable),
    };
  }
}
