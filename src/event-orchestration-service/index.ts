// https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventOrchestrationServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}
  */
  readonly enableEventOrchestrationForService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#id EventOrchestrationService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#service EventOrchestrationService#service}
  */
  readonly service: string;
  /**
  * catch_all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#catch_all EventOrchestrationService#catch_all}
  */
  readonly catchAll: EventOrchestrationServiceCatchAll;
  /**
  * set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#set EventOrchestrationService#set}
  */
  readonly set: EventOrchestrationServiceSet[] | cdktf.IResolvable;
}
export interface EventOrchestrationServiceCatchAllActionsAutomationActionHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#key EventOrchestrationService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceCatchAllActionsAutomationActionHeaderToTerraform(struct?: EventOrchestrationServiceCatchAllActionsAutomationActionHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceCatchAllActionsAutomationActionHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsAutomationActionHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceCatchAllActionsAutomationActionHeader[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference {
    return new EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceCatchAllActionsAutomationActionParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#key EventOrchestrationService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceCatchAllActionsAutomationActionParameterToTerraform(struct?: EventOrchestrationServiceCatchAllActionsAutomationActionParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceCatchAllActionsAutomationActionParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsAutomationActionParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceCatchAllActionsAutomationActionParameterList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceCatchAllActionsAutomationActionParameter[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference {
    return new EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceCatchAllActionsAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#auto_send EventOrchestrationService#auto_send}
  */
  readonly autoSend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#name EventOrchestrationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#url EventOrchestrationService#url}
  */
  readonly url: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#header EventOrchestrationService#header}
  */
  readonly header?: EventOrchestrationServiceCatchAllActionsAutomationActionHeader[] | cdktf.IResolvable;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#parameter EventOrchestrationService#parameter}
  */
  readonly parameter?: EventOrchestrationServiceCatchAllActionsAutomationActionParameter[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceCatchAllActionsAutomationActionToTerraform(struct?: EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference | EventOrchestrationServiceCatchAllActionsAutomationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_send: cdktf.booleanToTerraform(struct!.autoSend),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
    header: cdktf.listMapper(eventOrchestrationServiceCatchAllActionsAutomationActionHeaderToTerraform, true)(struct!.header),
    parameter: cdktf.listMapper(eventOrchestrationServiceCatchAllActionsAutomationActionParameterToTerraform, true)(struct!.parameter),
  }
}

export class EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceCatchAllActionsAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSend = this._autoSend;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSend = undefined;
      this._name = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSend = value.autoSend;
      this._name = value.name;
      this._url = value.url;
      this._header.internalValue = value.header;
      this._parameter.internalValue = value.parameter;
    }
  }

  // auto_send - computed: false, optional: true, required: false
  private _autoSend?: boolean | cdktf.IResolvable; 
  public get autoSend() {
    return this.getBooleanAttribute('auto_send');
  }
  public set autoSend(value: boolean | cdktf.IResolvable) {
    this._autoSend = value;
  }
  public resetAutoSend() {
    this._autoSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSendInput() {
    return this._autoSend;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // header - computed: false, optional: true, required: false
  private _header = new EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: EventOrchestrationServiceCatchAllActionsAutomationActionHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new EventOrchestrationServiceCatchAllActionsAutomationActionParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: EventOrchestrationServiceCatchAllActionsAutomationActionParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface EventOrchestrationServiceCatchAllActionsExtraction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#regex EventOrchestrationService#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#source EventOrchestrationService#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#target EventOrchestrationService#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#template EventOrchestrationService#template}
  */
  readonly template?: string;
}

export function eventOrchestrationServiceCatchAllActionsExtractionToTerraform(struct?: EventOrchestrationServiceCatchAllActionsExtraction | cdktf.IResolvable): any {
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

export class EventOrchestrationServiceCatchAllActionsExtractionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceCatchAllActionsExtraction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsExtraction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._source = undefined;
      this._target = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._source = value.source;
      this._target = value.target;
      this._template = value.template;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class EventOrchestrationServiceCatchAllActionsExtractionList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceCatchAllActionsExtraction[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceCatchAllActionsExtractionOutputReference {
    return new EventOrchestrationServiceCatchAllActionsExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#action_id EventOrchestrationService#action_id}
  */
  readonly actionId: string;
}

export function eventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionToTerraform(struct?: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference | EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
  }
}

export class EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionId = value.actionId;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }
}
export interface EventOrchestrationServiceCatchAllActionsVariable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#name EventOrchestrationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#path EventOrchestrationService#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#type EventOrchestrationService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceCatchAllActionsVariableToTerraform(struct?: EventOrchestrationServiceCatchAllActionsVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceCatchAllActionsVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceCatchAllActionsVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActionsVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceCatchAllActionsVariableList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceCatchAllActionsVariable[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceCatchAllActionsVariableOutputReference {
    return new EventOrchestrationServiceCatchAllActionsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceCatchAllActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#annotate EventOrchestrationService#annotate}
  */
  readonly annotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#event_action EventOrchestrationService#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#priority EventOrchestrationService#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#route_to EventOrchestrationService#route_to}
  */
  readonly routeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#severity EventOrchestrationService#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#suppress EventOrchestrationService#suppress}
  */
  readonly suppress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#suspend EventOrchestrationService#suspend}
  */
  readonly suspend?: number;
  /**
  * automation_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#automation_action EventOrchestrationService#automation_action}
  */
  readonly automationAction?: EventOrchestrationServiceCatchAllActionsAutomationAction;
  /**
  * extraction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#extraction EventOrchestrationService#extraction}
  */
  readonly extraction?: EventOrchestrationServiceCatchAllActionsExtraction[] | cdktf.IResolvable;
  /**
  * pagerduty_automation_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}
  */
  readonly pagerdutyAutomationAction?: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#variable EventOrchestrationService#variable}
  */
  readonly variable?: EventOrchestrationServiceCatchAllActionsVariable[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceCatchAllActionsToTerraform(struct?: EventOrchestrationServiceCatchAllActionsOutputReference | EventOrchestrationServiceCatchAllActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktf.stringToTerraform(struct!.annotate),
    event_action: cdktf.stringToTerraform(struct!.eventAction),
    priority: cdktf.stringToTerraform(struct!.priority),
    route_to: cdktf.stringToTerraform(struct!.routeTo),
    severity: cdktf.stringToTerraform(struct!.severity),
    suppress: cdktf.booleanToTerraform(struct!.suppress),
    suspend: cdktf.numberToTerraform(struct!.suspend),
    automation_action: eventOrchestrationServiceCatchAllActionsAutomationActionToTerraform(struct!.automationAction),
    extraction: cdktf.listMapper(eventOrchestrationServiceCatchAllActionsExtractionToTerraform, true)(struct!.extraction),
    pagerduty_automation_action: eventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionToTerraform(struct!.pagerdutyAutomationAction),
    variable: cdktf.listMapper(eventOrchestrationServiceCatchAllActionsVariableToTerraform, true)(struct!.variable),
  }
}

export class EventOrchestrationServiceCatchAllActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceCatchAllActions | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
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
    if (this._automationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAction = this._automationAction?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._pagerdutyAutomationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyAutomationAction = this._pagerdutyAutomationAction?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAllActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate = undefined;
      this._eventAction = undefined;
      this._priority = undefined;
      this._routeTo = undefined;
      this._severity = undefined;
      this._suppress = undefined;
      this._suspend = undefined;
      this._automationAction.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._pagerdutyAutomationAction.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotate = value.annotate;
      this._eventAction = value.eventAction;
      this._priority = value.priority;
      this._routeTo = value.routeTo;
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
      this._automationAction.internalValue = value.automationAction;
      this._extraction.internalValue = value.extraction;
      this._pagerdutyAutomationAction.internalValue = value.pagerdutyAutomationAction;
      this._variable.internalValue = value.variable;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: string; 
  public get annotate() {
    return this.getStringAttribute('annotate');
  }
  public set annotate(value: string) {
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
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_to - computed: false, optional: true, required: false
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  public resetRouteTo() {
    this._routeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
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
  private _suppress?: boolean | cdktf.IResolvable; 
  public get suppress() {
    return this.getBooleanAttribute('suppress');
  }
  public set suppress(value: boolean | cdktf.IResolvable) {
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
  private _suspend?: number; 
  public get suspend() {
    return this.getNumberAttribute('suspend');
  }
  public set suspend(value: number) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // automation_action - computed: false, optional: true, required: false
  private _automationAction = new EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference(this, "automation_action");
  public get automationAction() {
    return this._automationAction;
  }
  public putAutomationAction(value: EventOrchestrationServiceCatchAllActionsAutomationAction) {
    this._automationAction.internalValue = value;
  }
  public resetAutomationAction() {
    this._automationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationActionInput() {
    return this._automationAction.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new EventOrchestrationServiceCatchAllActionsExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: EventOrchestrationServiceCatchAllActionsExtraction[] | cdktf.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // pagerduty_automation_action - computed: false, optional: true, required: false
  private _pagerdutyAutomationAction = new EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference(this, "pagerduty_automation_action");
  public get pagerdutyAutomationAction() {
    return this._pagerdutyAutomationAction;
  }
  public putPagerdutyAutomationAction(value: EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction) {
    this._pagerdutyAutomationAction.internalValue = value;
  }
  public resetPagerdutyAutomationAction() {
    this._pagerdutyAutomationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyAutomationActionInput() {
    return this._pagerdutyAutomationAction.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new EventOrchestrationServiceCatchAllActionsVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: EventOrchestrationServiceCatchAllActionsVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface EventOrchestrationServiceCatchAll {
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#actions EventOrchestrationService#actions}
  */
  readonly actions: EventOrchestrationServiceCatchAllActions;
}

export function eventOrchestrationServiceCatchAllToTerraform(struct?: EventOrchestrationServiceCatchAllOutputReference | EventOrchestrationServiceCatchAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: eventOrchestrationServiceCatchAllActionsToTerraform(struct!.actions),
  }
}

export class EventOrchestrationServiceCatchAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceCatchAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceCatchAll | undefined) {
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
  private _actions = new EventOrchestrationServiceCatchAllActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationServiceCatchAllActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface EventOrchestrationServiceSetRuleActionsAutomationActionHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#key EventOrchestrationService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceSetRuleActionsAutomationActionHeaderToTerraform(struct?: EventOrchestrationServiceSetRuleActionsAutomationActionHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRuleActionsAutomationActionHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsAutomationActionHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRuleActionsAutomationActionHeader[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference {
    return new EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSetRuleActionsAutomationActionParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#key EventOrchestrationService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceSetRuleActionsAutomationActionParameterToTerraform(struct?: EventOrchestrationServiceSetRuleActionsAutomationActionParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRuleActionsAutomationActionParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsAutomationActionParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceSetRuleActionsAutomationActionParameterList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRuleActionsAutomationActionParameter[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference {
    return new EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSetRuleActionsAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#auto_send EventOrchestrationService#auto_send}
  */
  readonly autoSend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#name EventOrchestrationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#url EventOrchestrationService#url}
  */
  readonly url: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#header EventOrchestrationService#header}
  */
  readonly header?: EventOrchestrationServiceSetRuleActionsAutomationActionHeader[] | cdktf.IResolvable;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#parameter EventOrchestrationService#parameter}
  */
  readonly parameter?: EventOrchestrationServiceSetRuleActionsAutomationActionParameter[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceSetRuleActionsAutomationActionToTerraform(struct?: EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference | EventOrchestrationServiceSetRuleActionsAutomationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_send: cdktf.booleanToTerraform(struct!.autoSend),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
    header: cdktf.listMapper(eventOrchestrationServiceSetRuleActionsAutomationActionHeaderToTerraform, true)(struct!.header),
    parameter: cdktf.listMapper(eventOrchestrationServiceSetRuleActionsAutomationActionParameterToTerraform, true)(struct!.parameter),
  }
}

export class EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceSetRuleActionsAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSend = this._autoSend;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSend = undefined;
      this._name = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSend = value.autoSend;
      this._name = value.name;
      this._url = value.url;
      this._header.internalValue = value.header;
      this._parameter.internalValue = value.parameter;
    }
  }

  // auto_send - computed: false, optional: true, required: false
  private _autoSend?: boolean | cdktf.IResolvable; 
  public get autoSend() {
    return this.getBooleanAttribute('auto_send');
  }
  public set autoSend(value: boolean | cdktf.IResolvable) {
    this._autoSend = value;
  }
  public resetAutoSend() {
    this._autoSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSendInput() {
    return this._autoSend;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // header - computed: false, optional: true, required: false
  private _header = new EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: EventOrchestrationServiceSetRuleActionsAutomationActionHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new EventOrchestrationServiceSetRuleActionsAutomationActionParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: EventOrchestrationServiceSetRuleActionsAutomationActionParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface EventOrchestrationServiceSetRuleActionsExtraction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#regex EventOrchestrationService#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#source EventOrchestrationService#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#target EventOrchestrationService#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#template EventOrchestrationService#template}
  */
  readonly template?: string;
}

export function eventOrchestrationServiceSetRuleActionsExtractionToTerraform(struct?: EventOrchestrationServiceSetRuleActionsExtraction | cdktf.IResolvable): any {
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

export class EventOrchestrationServiceSetRuleActionsExtractionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRuleActionsExtraction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsExtraction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._source = undefined;
      this._target = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._source = value.source;
      this._target = value.target;
      this._template = value.template;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class EventOrchestrationServiceSetRuleActionsExtractionList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRuleActionsExtraction[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleActionsExtractionOutputReference {
    return new EventOrchestrationServiceSetRuleActionsExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#action_id EventOrchestrationService#action_id}
  */
  readonly actionId: string;
}

export function eventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionToTerraform(struct?: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference | EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
  }
}

export class EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionId = value.actionId;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }
}
export interface EventOrchestrationServiceSetRuleActionsVariable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#name EventOrchestrationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#path EventOrchestrationService#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#type EventOrchestrationService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#value EventOrchestrationService#value}
  */
  readonly value: string;
}

export function eventOrchestrationServiceSetRuleActionsVariableToTerraform(struct?: EventOrchestrationServiceSetRuleActionsVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventOrchestrationServiceSetRuleActionsVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRuleActionsVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActionsVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationServiceSetRuleActionsVariableList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRuleActionsVariable[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleActionsVariableOutputReference {
    return new EventOrchestrationServiceSetRuleActionsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSetRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#annotate EventOrchestrationService#annotate}
  */
  readonly annotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#event_action EventOrchestrationService#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#priority EventOrchestrationService#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#route_to EventOrchestrationService#route_to}
  */
  readonly routeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#severity EventOrchestrationService#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#suppress EventOrchestrationService#suppress}
  */
  readonly suppress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#suspend EventOrchestrationService#suspend}
  */
  readonly suspend?: number;
  /**
  * automation_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#automation_action EventOrchestrationService#automation_action}
  */
  readonly automationAction?: EventOrchestrationServiceSetRuleActionsAutomationAction;
  /**
  * extraction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#extraction EventOrchestrationService#extraction}
  */
  readonly extraction?: EventOrchestrationServiceSetRuleActionsExtraction[] | cdktf.IResolvable;
  /**
  * pagerduty_automation_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}
  */
  readonly pagerdutyAutomationAction?: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#variable EventOrchestrationService#variable}
  */
  readonly variable?: EventOrchestrationServiceSetRuleActionsVariable[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceSetRuleActionsToTerraform(struct?: EventOrchestrationServiceSetRuleActionsOutputReference | EventOrchestrationServiceSetRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktf.stringToTerraform(struct!.annotate),
    event_action: cdktf.stringToTerraform(struct!.eventAction),
    priority: cdktf.stringToTerraform(struct!.priority),
    route_to: cdktf.stringToTerraform(struct!.routeTo),
    severity: cdktf.stringToTerraform(struct!.severity),
    suppress: cdktf.booleanToTerraform(struct!.suppress),
    suspend: cdktf.numberToTerraform(struct!.suspend),
    automation_action: eventOrchestrationServiceSetRuleActionsAutomationActionToTerraform(struct!.automationAction),
    extraction: cdktf.listMapper(eventOrchestrationServiceSetRuleActionsExtractionToTerraform, true)(struct!.extraction),
    pagerduty_automation_action: eventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionToTerraform(struct!.pagerdutyAutomationAction),
    variable: cdktf.listMapper(eventOrchestrationServiceSetRuleActionsVariableToTerraform, true)(struct!.variable),
  }
}

export class EventOrchestrationServiceSetRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationServiceSetRuleActions | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
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
    if (this._automationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAction = this._automationAction?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._pagerdutyAutomationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyAutomationAction = this._pagerdutyAutomationAction?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationServiceSetRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate = undefined;
      this._eventAction = undefined;
      this._priority = undefined;
      this._routeTo = undefined;
      this._severity = undefined;
      this._suppress = undefined;
      this._suspend = undefined;
      this._automationAction.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._pagerdutyAutomationAction.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotate = value.annotate;
      this._eventAction = value.eventAction;
      this._priority = value.priority;
      this._routeTo = value.routeTo;
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
      this._automationAction.internalValue = value.automationAction;
      this._extraction.internalValue = value.extraction;
      this._pagerdutyAutomationAction.internalValue = value.pagerdutyAutomationAction;
      this._variable.internalValue = value.variable;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: string; 
  public get annotate() {
    return this.getStringAttribute('annotate');
  }
  public set annotate(value: string) {
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
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_to - computed: false, optional: true, required: false
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  public resetRouteTo() {
    this._routeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
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
  private _suppress?: boolean | cdktf.IResolvable; 
  public get suppress() {
    return this.getBooleanAttribute('suppress');
  }
  public set suppress(value: boolean | cdktf.IResolvable) {
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
  private _suspend?: number; 
  public get suspend() {
    return this.getNumberAttribute('suspend');
  }
  public set suspend(value: number) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // automation_action - computed: false, optional: true, required: false
  private _automationAction = new EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference(this, "automation_action");
  public get automationAction() {
    return this._automationAction;
  }
  public putAutomationAction(value: EventOrchestrationServiceSetRuleActionsAutomationAction) {
    this._automationAction.internalValue = value;
  }
  public resetAutomationAction() {
    this._automationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationActionInput() {
    return this._automationAction.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new EventOrchestrationServiceSetRuleActionsExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: EventOrchestrationServiceSetRuleActionsExtraction[] | cdktf.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // pagerduty_automation_action - computed: false, optional: true, required: false
  private _pagerdutyAutomationAction = new EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference(this, "pagerduty_automation_action");
  public get pagerdutyAutomationAction() {
    return this._pagerdutyAutomationAction;
  }
  public putPagerdutyAutomationAction(value: EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction) {
    this._pagerdutyAutomationAction.internalValue = value;
  }
  public resetPagerdutyAutomationAction() {
    this._pagerdutyAutomationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyAutomationActionInput() {
    return this._pagerdutyAutomationAction.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new EventOrchestrationServiceSetRuleActionsVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: EventOrchestrationServiceSetRuleActionsVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface EventOrchestrationServiceSetRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#expression EventOrchestrationService#expression}
  */
  readonly expression: string;
}

export function eventOrchestrationServiceSetRuleConditionToTerraform(struct?: EventOrchestrationServiceSetRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class EventOrchestrationServiceSetRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRuleCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventOrchestrationServiceSetRuleCondition | cdktf.IResolvable | undefined) {
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

export class EventOrchestrationServiceSetRuleConditionList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleConditionOutputReference {
    return new EventOrchestrationServiceSetRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSetRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#disabled EventOrchestrationService#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#label EventOrchestrationService#label}
  */
  readonly label?: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#actions EventOrchestrationService#actions}
  */
  readonly actions: EventOrchestrationServiceSetRuleActions;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#condition EventOrchestrationService#condition}
  */
  readonly condition?: EventOrchestrationServiceSetRuleCondition[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceSetRuleToTerraform(struct?: EventOrchestrationServiceSetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    label: cdktf.stringToTerraform(struct!.label),
    actions: eventOrchestrationServiceSetRuleActionsToTerraform(struct!.actions),
    condition: cdktf.listMapper(eventOrchestrationServiceSetRuleConditionToTerraform, true)(struct!.condition),
  }
}

export class EventOrchestrationServiceSetRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSetRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventOrchestrationServiceSetRule | cdktf.IResolvable | undefined) {
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
  private _actions = new EventOrchestrationServiceSetRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationServiceSetRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new EventOrchestrationServiceSetRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: EventOrchestrationServiceSetRuleCondition[] | cdktf.IResolvable) {
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

export class EventOrchestrationServiceSetRuleList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSetRule[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetRuleOutputReference {
    return new EventOrchestrationServiceSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationServiceSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#id EventOrchestrationService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service#rule EventOrchestrationService#rule}
  */
  readonly rule?: EventOrchestrationServiceSetRule[] | cdktf.IResolvable;
}

export function eventOrchestrationServiceSetToTerraform(struct?: EventOrchestrationServiceSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    rule: cdktf.listMapper(eventOrchestrationServiceSetRuleToTerraform, true)(struct!.rule),
  }
}

export class EventOrchestrationServiceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationServiceSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EventOrchestrationServiceSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _rule = new EventOrchestrationServiceSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: EventOrchestrationServiceSetRule[] | cdktf.IResolvable) {
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

export class EventOrchestrationServiceSetList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationServiceSet[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationServiceSetOutputReference {
    return new EventOrchestrationServiceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service pagerduty_event_orchestration_service}
*/
export class EventOrchestrationService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/event_orchestration_service pagerduty_event_orchestration_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventOrchestrationServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EventOrchestrationServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_service',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.14.2',
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
    this._enableEventOrchestrationForService = config.enableEventOrchestrationForService;
    this._id = config.id;
    this._service = config.service;
    this._catchAll.internalValue = config.catchAll;
    this._set.internalValue = config.set;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_event_orchestration_for_service - computed: false, optional: true, required: false
  private _enableEventOrchestrationForService?: boolean | cdktf.IResolvable; 
  public get enableEventOrchestrationForService() {
    return this.getBooleanAttribute('enable_event_orchestration_for_service');
  }
  public set enableEventOrchestrationForService(value: boolean | cdktf.IResolvable) {
    this._enableEventOrchestrationForService = value;
  }
  public resetEnableEventOrchestrationForService() {
    this._enableEventOrchestrationForService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventOrchestrationForServiceInput() {
    return this._enableEventOrchestrationForService;
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

  // catch_all - computed: false, optional: false, required: true
  private _catchAll = new EventOrchestrationServiceCatchAllOutputReference(this, "catch_all");
  public get catchAll() {
    return this._catchAll;
  }
  public putCatchAll(value: EventOrchestrationServiceCatchAll) {
    this._catchAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllInput() {
    return this._catchAll.internalValue;
  }

  // set - computed: false, optional: false, required: true
  private _set = new EventOrchestrationServiceSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: EventOrchestrationServiceSet[] | cdktf.IResolvable) {
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
      enable_event_orchestration_for_service: cdktf.booleanToTerraform(this._enableEventOrchestrationForService),
      id: cdktf.stringToTerraform(this._id),
      service: cdktf.stringToTerraform(this._service),
      catch_all: eventOrchestrationServiceCatchAllToTerraform(this._catchAll.internalValue),
      set: cdktf.listMapper(eventOrchestrationServiceSetToTerraform, true)(this._set.internalValue),
    };
  }
}
