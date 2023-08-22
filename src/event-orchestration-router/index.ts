// https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventOrchestrationRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#event_orchestration EventOrchestrationRouter#event_orchestration}
  */
  readonly eventOrchestration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * catch_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#catch_all EventOrchestrationRouter#catch_all}
  */
  readonly catchAll: EventOrchestrationRouterCatchAll;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#set EventOrchestrationRouter#set}
  */
  readonly set: EventOrchestrationRouterSet;
}
export interface EventOrchestrationRouterCatchAllActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}
  */
  readonly routeTo: string;
}

export function eventOrchestrationRouterCatchAllActionsToTerraform(struct?: EventOrchestrationRouterCatchAllActionsOutputReference | EventOrchestrationRouterCatchAllActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_to: cdktf.stringToTerraform(struct!.routeTo),
  }
}

export class EventOrchestrationRouterCatchAllActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationRouterCatchAllActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterCatchAllActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeTo = value.routeTo;
    }
  }

  // route_to - computed: false, optional: false, required: true
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }
}
export interface EventOrchestrationRouterCatchAll {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#actions EventOrchestrationRouter#actions}
  */
  readonly actions: EventOrchestrationRouterCatchAllActions;
}

export function eventOrchestrationRouterCatchAllToTerraform(struct?: EventOrchestrationRouterCatchAllOutputReference | EventOrchestrationRouterCatchAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: eventOrchestrationRouterCatchAllActionsToTerraform(struct!.actions),
  }
}

export class EventOrchestrationRouterCatchAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationRouterCatchAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterCatchAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new EventOrchestrationRouterCatchAllActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationRouterCatchAllActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface EventOrchestrationRouterSetRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}
  */
  readonly routeTo: string;
}

export function eventOrchestrationRouterSetRuleActionsToTerraform(struct?: EventOrchestrationRouterSetRuleActionsOutputReference | EventOrchestrationRouterSetRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_to: cdktf.stringToTerraform(struct!.routeTo),
  }
}

export class EventOrchestrationRouterSetRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationRouterSetRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterSetRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeTo = value.routeTo;
    }
  }

  // route_to - computed: false, optional: false, required: true
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }
}
export interface EventOrchestrationRouterSetRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#expression EventOrchestrationRouter#expression}
  */
  readonly expression: string;
}

export function eventOrchestrationRouterSetRuleConditionToTerraform(struct?: EventOrchestrationRouterSetRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class EventOrchestrationRouterSetRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventOrchestrationRouterSetRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterSetRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class EventOrchestrationRouterSetRuleConditionList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationRouterSetRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationRouterSetRuleConditionOutputReference {
    return new EventOrchestrationRouterSetRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationRouterSetRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#disabled EventOrchestrationRouter#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#label EventOrchestrationRouter#label}
  */
  readonly label?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#actions EventOrchestrationRouter#actions}
  */
  readonly actions: EventOrchestrationRouterSetRuleActions;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#condition EventOrchestrationRouter#condition}
  */
  readonly condition?: EventOrchestrationRouterSetRuleCondition[] | cdktf.IResolvable;
}

export function eventOrchestrationRouterSetRuleToTerraform(struct?: EventOrchestrationRouterSetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    label: cdktf.stringToTerraform(struct!.label),
    actions: eventOrchestrationRouterSetRuleActionsToTerraform(struct!.actions),
    condition: cdktf.listMapper(eventOrchestrationRouterSetRuleConditionToTerraform, true)(struct!.condition),
  }
}

export class EventOrchestrationRouterSetRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EventOrchestrationRouterSetRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterSetRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._label = undefined;
      this._actions.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._label = value.label;
      this._actions.internalValue = value.actions;
      this._condition.internalValue = value.condition;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new EventOrchestrationRouterSetRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationRouterSetRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new EventOrchestrationRouterSetRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: EventOrchestrationRouterSetRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class EventOrchestrationRouterSetRuleList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationRouterSetRule[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationRouterSetRuleOutputReference {
    return new EventOrchestrationRouterSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationRouterSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router#rule EventOrchestrationRouter#rule}
  */
  readonly rule?: EventOrchestrationRouterSetRule[] | cdktf.IResolvable;
}

export function eventOrchestrationRouterSetToTerraform(struct?: EventOrchestrationRouterSetOutputReference | EventOrchestrationRouterSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    rule: cdktf.listMapper(eventOrchestrationRouterSetRuleToTerraform, true)(struct!.rule),
  }
}

export class EventOrchestrationRouterSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationRouterSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationRouterSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._rule.internalValue = value.rule;
    }
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

  // rule - computed: false, optional: true, required: false
  private _rule = new EventOrchestrationRouterSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: EventOrchestrationRouterSetRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router pagerduty_event_orchestration_router}
*/
export class EventOrchestrationRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_router";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/event_orchestration_router pagerduty_event_orchestration_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventOrchestrationRouterConfig
  */
  public constructor(scope: Construct, id: string, config: EventOrchestrationRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_router',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.16.0',
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
    this._eventOrchestration = config.eventOrchestration;
    this._id = config.id;
    this._catchAll.internalValue = config.catchAll;
    this._set.internalValue = config.set;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_orchestration - computed: false, optional: false, required: true
  private _eventOrchestration?: string; 
  public get eventOrchestration() {
    return this.getStringAttribute('event_orchestration');
  }
  public set eventOrchestration(value: string) {
    this._eventOrchestration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOrchestrationInput() {
    return this._eventOrchestration;
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

  // catch_all - computed: false, optional: false, required: true
  private _catchAll = new EventOrchestrationRouterCatchAllOutputReference(this, "catch_all");
  public get catchAll() {
    return this._catchAll;
  }
  public putCatchAll(value: EventOrchestrationRouterCatchAll) {
    this._catchAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllInput() {
    return this._catchAll.internalValue;
  }

  // set - computed: false, optional: false, required: true
  private _set = new EventOrchestrationRouterSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: EventOrchestrationRouterSet) {
    this._set.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_orchestration: cdktf.stringToTerraform(this._eventOrchestration),
      id: cdktf.stringToTerraform(this._id),
      catch_all: eventOrchestrationRouterCatchAllToTerraform(this._catchAll.internalValue),
      set: eventOrchestrationRouterSetToTerraform(this._set.internalValue),
    };
  }
}
