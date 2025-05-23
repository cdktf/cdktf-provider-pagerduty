// https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}
  */
  readonly acknowledgementTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#alert_creation Service#alert_creation}
  */
  readonly alertCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#alert_grouping Service#alert_grouping}
  */
  readonly alertGrouping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}
  */
  readonly alertGroupingTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}
  */
  readonly autoResolveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#escalation_policy Service#escalation_policy}
  */
  readonly escalationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#response_play Service#response_play}
  */
  readonly responsePlay?: string;
  /**
  * alert_grouping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}
  */
  readonly alertGroupingParameters?: ServiceAlertGroupingParameters;
  /**
  * auto_pause_notifications_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}
  */
  readonly autoPauseNotificationsParameters?: ServiceAutoPauseNotificationsParameters;
  /**
  * incident_urgency_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}
  */
  readonly incidentUrgencyRule?: ServiceIncidentUrgencyRule;
  /**
  * scheduled_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#scheduled_actions Service#scheduled_actions}
  */
  readonly scheduledActions?: ServiceScheduledActions[] | cdktf.IResolvable;
  /**
  * support_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#support_hours Service#support_hours}
  */
  readonly supportHours?: ServiceSupportHours;
}
export interface ServiceAlertGroupingParametersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#aggregate Service#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#fields Service#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#time_window Service#time_window}
  */
  readonly timeWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#timeout Service#timeout}
  */
  readonly timeout?: number;
}

export function serviceAlertGroupingParametersConfigToTerraform(struct?: ServiceAlertGroupingParametersConfigOutputReference | ServiceAlertGroupingParametersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function serviceAlertGroupingParametersConfigToHclTerraform(struct?: ServiceAlertGroupingParametersConfigOutputReference | ServiceAlertGroupingParametersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate: {
      value: cdktf.stringToHclTerraform(struct!.aggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAlertGroupingParametersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAlertGroupingParametersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAlertGroupingParametersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregate = undefined;
      this._fields = undefined;
      this._timeWindow = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregate = value.aggregate;
      this._fields = value.fields;
      this._timeWindow = value.timeWindow;
      this._timeout = value.timeout;
    }
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // time_window - computed: true, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ServiceAlertGroupingParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#config Service#config}
  */
  readonly config?: ServiceAlertGroupingParametersConfig;
}

export function serviceAlertGroupingParametersToTerraform(struct?: ServiceAlertGroupingParametersOutputReference | ServiceAlertGroupingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: serviceAlertGroupingParametersConfigToTerraform(struct!.config),
  }
}


export function serviceAlertGroupingParametersToHclTerraform(struct?: ServiceAlertGroupingParametersOutputReference | ServiceAlertGroupingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: serviceAlertGroupingParametersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceAlertGroupingParametersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAlertGroupingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAlertGroupingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAlertGroupingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ServiceAlertGroupingParametersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ServiceAlertGroupingParametersConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface ServiceAutoPauseNotificationsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#enabled Service#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#timeout Service#timeout}
  */
  readonly timeout?: number;
}

export function serviceAutoPauseNotificationsParametersToTerraform(struct?: ServiceAutoPauseNotificationsParametersOutputReference | ServiceAutoPauseNotificationsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function serviceAutoPauseNotificationsParametersToHclTerraform(struct?: ServiceAutoPauseNotificationsParametersOutputReference | ServiceAutoPauseNotificationsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAutoPauseNotificationsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAutoPauseNotificationsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAutoPauseNotificationsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ServiceIncidentUrgencyRuleDuringSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#urgency Service#urgency}
  */
  readonly urgency?: string;
}

export function serviceIncidentUrgencyRuleDuringSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference | ServiceIncidentUrgencyRuleDuringSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function serviceIncidentUrgencyRuleDuringSupportHoursToHclTerraform(struct?: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference | ServiceIncidentUrgencyRuleDuringSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIncidentUrgencyRuleDuringSupportHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentUrgencyRuleDuringSupportHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._urgency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._urgency = value.urgency;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}
export interface ServiceIncidentUrgencyRuleOutsideSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#urgency Service#urgency}
  */
  readonly urgency?: string;
}

export function serviceIncidentUrgencyRuleOutsideSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference | ServiceIncidentUrgencyRuleOutsideSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function serviceIncidentUrgencyRuleOutsideSupportHoursToHclTerraform(struct?: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference | ServiceIncidentUrgencyRuleOutsideSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIncidentUrgencyRuleOutsideSupportHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentUrgencyRuleOutsideSupportHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._urgency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._urgency = value.urgency;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}
export interface ServiceIncidentUrgencyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#urgency Service#urgency}
  */
  readonly urgency?: string;
  /**
  * during_support_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#during_support_hours Service#during_support_hours}
  */
  readonly duringSupportHours?: ServiceIncidentUrgencyRuleDuringSupportHours;
  /**
  * outside_support_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#outside_support_hours Service#outside_support_hours}
  */
  readonly outsideSupportHours?: ServiceIncidentUrgencyRuleOutsideSupportHours;
}

export function serviceIncidentUrgencyRuleToTerraform(struct?: ServiceIncidentUrgencyRuleOutputReference | ServiceIncidentUrgencyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
    during_support_hours: serviceIncidentUrgencyRuleDuringSupportHoursToTerraform(struct!.duringSupportHours),
    outside_support_hours: serviceIncidentUrgencyRuleOutsideSupportHoursToTerraform(struct!.outsideSupportHours),
  }
}


export function serviceIncidentUrgencyRuleToHclTerraform(struct?: ServiceIncidentUrgencyRuleOutputReference | ServiceIncidentUrgencyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    during_support_hours: {
      value: serviceIncidentUrgencyRuleDuringSupportHoursToHclTerraform(struct!.duringSupportHours),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIncidentUrgencyRuleDuringSupportHoursList",
    },
    outside_support_hours: {
      value: serviceIncidentUrgencyRuleOutsideSupportHoursToHclTerraform(struct!.outsideSupportHours),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIncidentUrgencyRuleOutsideSupportHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentUrgencyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIncidentUrgencyRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    if (this._duringSupportHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duringSupportHours = this._duringSupportHours?.internalValue;
    }
    if (this._outsideSupportHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSupportHours = this._outsideSupportHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentUrgencyRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._urgency = undefined;
      this._duringSupportHours.internalValue = undefined;
      this._outsideSupportHours.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._urgency = value.urgency;
      this._duringSupportHours.internalValue = value.duringSupportHours;
      this._outsideSupportHours.internalValue = value.outsideSupportHours;
    }
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

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }

  // during_support_hours - computed: false, optional: true, required: false
  private _duringSupportHours = new ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(this, "during_support_hours");
  public get duringSupportHours() {
    return this._duringSupportHours;
  }
  public putDuringSupportHours(value: ServiceIncidentUrgencyRuleDuringSupportHours) {
    this._duringSupportHours.internalValue = value;
  }
  public resetDuringSupportHours() {
    this._duringSupportHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duringSupportHoursInput() {
    return this._duringSupportHours.internalValue;
  }

  // outside_support_hours - computed: false, optional: true, required: false
  private _outsideSupportHours = new ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(this, "outside_support_hours");
  public get outsideSupportHours() {
    return this._outsideSupportHours;
  }
  public putOutsideSupportHours(value: ServiceIncidentUrgencyRuleOutsideSupportHours) {
    this._outsideSupportHours.internalValue = value;
  }
  public resetOutsideSupportHours() {
    this._outsideSupportHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSupportHoursInput() {
    return this._outsideSupportHours.internalValue;
  }
}
export interface ServiceScheduledActionsAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#name Service#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
}

export function serviceScheduledActionsAtToTerraform(struct?: ServiceScheduledActionsAt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceScheduledActionsAtToHclTerraform(struct?: ServiceScheduledActionsAt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceScheduledActionsAtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceScheduledActionsAt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceScheduledActionsAt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServiceScheduledActionsAtList extends cdktf.ComplexList {
  public internalValue? : ServiceScheduledActionsAt[] | cdktf.IResolvable

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
  public get(index: number): ServiceScheduledActionsAtOutputReference {
    return new ServiceScheduledActionsAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceScheduledActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#to_urgency Service#to_urgency}
  */
  readonly toUrgency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
  /**
  * at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#at Service#at}
  */
  readonly at?: ServiceScheduledActionsAt[] | cdktf.IResolvable;
}

export function serviceScheduledActionsToTerraform(struct?: ServiceScheduledActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_urgency: cdktf.stringToTerraform(struct!.toUrgency),
    type: cdktf.stringToTerraform(struct!.type),
    at: cdktf.listMapper(serviceScheduledActionsAtToTerraform, true)(struct!.at),
  }
}


export function serviceScheduledActionsToHclTerraform(struct?: ServiceScheduledActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    to_urgency: {
      value: cdktf.stringToHclTerraform(struct!.toUrgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    at: {
      value: cdktf.listMapperHcl(serviceScheduledActionsAtToHclTerraform, true)(struct!.at),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceScheduledActionsAtList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceScheduledActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceScheduledActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toUrgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.toUrgency = this._toUrgency;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._at?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceScheduledActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._toUrgency = undefined;
      this._type = undefined;
      this._at.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._toUrgency = value.toUrgency;
      this._type = value.type;
      this._at.internalValue = value.at;
    }
  }

  // to_urgency - computed: false, optional: true, required: false
  private _toUrgency?: string; 
  public get toUrgency() {
    return this.getStringAttribute('to_urgency');
  }
  public set toUrgency(value: string) {
    this._toUrgency = value;
  }
  public resetToUrgency() {
    this._toUrgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toUrgencyInput() {
    return this._toUrgency;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // at - computed: false, optional: true, required: false
  private _at = new ServiceScheduledActionsAtList(this, "at", false);
  public get at() {
    return this._at;
  }
  public putAt(value: ServiceScheduledActionsAt[] | cdktf.IResolvable) {
    this._at.internalValue = value;
  }
  public resetAt() {
    this._at.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at.internalValue;
  }
}

export class ServiceScheduledActionsList extends cdktf.ComplexList {
  public internalValue? : ServiceScheduledActions[] | cdktf.IResolvable

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
  public get(index: number): ServiceScheduledActionsOutputReference {
    return new ServiceScheduledActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#days_of_week Service#days_of_week}
  */
  readonly daysOfWeek?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#end_time Service#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#start_time Service#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#time_zone Service#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#type Service#type}
  */
  readonly type?: string;
}

export function serviceSupportHoursToTerraform(struct?: ServiceSupportHoursOutputReference | ServiceSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceSupportHoursToHclTerraform(struct?: ServiceSupportHoursOutputReference | ServiceSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSupportHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceSupportHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSupportHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
      this._type = value.type;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: number[]; 
  public get daysOfWeek() {
    return this.getNumberListAttribute('days_of_week');
  }
  public set daysOfWeek(value: number[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service pagerduty_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/service pagerduty_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.25.2',
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
    this._acknowledgementTimeout = config.acknowledgementTimeout;
    this._alertCreation = config.alertCreation;
    this._alertGrouping = config.alertGrouping;
    this._alertGroupingTimeout = config.alertGroupingTimeout;
    this._autoResolveTimeout = config.autoResolveTimeout;
    this._description = config.description;
    this._escalationPolicy = config.escalationPolicy;
    this._id = config.id;
    this._name = config.name;
    this._responsePlay = config.responsePlay;
    this._alertGroupingParameters.internalValue = config.alertGroupingParameters;
    this._autoPauseNotificationsParameters.internalValue = config.autoPauseNotificationsParameters;
    this._incidentUrgencyRule.internalValue = config.incidentUrgencyRule;
    this._scheduledActions.internalValue = config.scheduledActions;
    this._supportHours.internalValue = config.supportHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledgement_timeout - computed: false, optional: true, required: false
  private _acknowledgementTimeout?: string; 
  public get acknowledgementTimeout() {
    return this.getStringAttribute('acknowledgement_timeout');
  }
  public set acknowledgementTimeout(value: string) {
    this._acknowledgementTimeout = value;
  }
  public resetAcknowledgementTimeout() {
    this._acknowledgementTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgementTimeoutInput() {
    return this._acknowledgementTimeout;
  }

  // alert_creation - computed: false, optional: true, required: false
  private _alertCreation?: string; 
  public get alertCreation() {
    return this.getStringAttribute('alert_creation');
  }
  public set alertCreation(value: string) {
    this._alertCreation = value;
  }
  public resetAlertCreation() {
    this._alertCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertCreationInput() {
    return this._alertCreation;
  }

  // alert_grouping - computed: true, optional: true, required: false
  private _alertGrouping?: string; 
  public get alertGrouping() {
    return this.getStringAttribute('alert_grouping');
  }
  public set alertGrouping(value: string) {
    this._alertGrouping = value;
  }
  public resetAlertGrouping() {
    this._alertGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingInput() {
    return this._alertGrouping;
  }

  // alert_grouping_timeout - computed: true, optional: true, required: false
  private _alertGroupingTimeout?: string; 
  public get alertGroupingTimeout() {
    return this.getStringAttribute('alert_grouping_timeout');
  }
  public set alertGroupingTimeout(value: string) {
    this._alertGroupingTimeout = value;
  }
  public resetAlertGroupingTimeout() {
    this._alertGroupingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingTimeoutInput() {
    return this._alertGroupingTimeout;
  }

  // auto_resolve_timeout - computed: false, optional: true, required: false
  private _autoResolveTimeout?: string; 
  public get autoResolveTimeout() {
    return this.getStringAttribute('auto_resolve_timeout');
  }
  public set autoResolveTimeout(value: string) {
    this._autoResolveTimeout = value;
  }
  public resetAutoResolveTimeout() {
    this._autoResolveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveTimeoutInput() {
    return this._autoResolveTimeout;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // escalation_policy - computed: false, optional: false, required: true
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // last_incident_timestamp - computed: true, optional: false, required: false
  public get lastIncidentTimestamp() {
    return this.getStringAttribute('last_incident_timestamp');
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

  // response_play - computed: true, optional: true, required: false
  private _responsePlay?: string; 
  public get responsePlay() {
    return this.getStringAttribute('response_play');
  }
  public set responsePlay(value: string) {
    this._responsePlay = value;
  }
  public resetResponsePlay() {
    this._responsePlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePlayInput() {
    return this._responsePlay;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // alert_grouping_parameters - computed: false, optional: true, required: false
  private _alertGroupingParameters = new ServiceAlertGroupingParametersOutputReference(this, "alert_grouping_parameters");
  public get alertGroupingParameters() {
    return this._alertGroupingParameters;
  }
  public putAlertGroupingParameters(value: ServiceAlertGroupingParameters) {
    this._alertGroupingParameters.internalValue = value;
  }
  public resetAlertGroupingParameters() {
    this._alertGroupingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingParametersInput() {
    return this._alertGroupingParameters.internalValue;
  }

  // auto_pause_notifications_parameters - computed: false, optional: true, required: false
  private _autoPauseNotificationsParameters = new ServiceAutoPauseNotificationsParametersOutputReference(this, "auto_pause_notifications_parameters");
  public get autoPauseNotificationsParameters() {
    return this._autoPauseNotificationsParameters;
  }
  public putAutoPauseNotificationsParameters(value: ServiceAutoPauseNotificationsParameters) {
    this._autoPauseNotificationsParameters.internalValue = value;
  }
  public resetAutoPauseNotificationsParameters() {
    this._autoPauseNotificationsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseNotificationsParametersInput() {
    return this._autoPauseNotificationsParameters.internalValue;
  }

  // incident_urgency_rule - computed: false, optional: true, required: false
  private _incidentUrgencyRule = new ServiceIncidentUrgencyRuleOutputReference(this, "incident_urgency_rule");
  public get incidentUrgencyRule() {
    return this._incidentUrgencyRule;
  }
  public putIncidentUrgencyRule(value: ServiceIncidentUrgencyRule) {
    this._incidentUrgencyRule.internalValue = value;
  }
  public resetIncidentUrgencyRule() {
    this._incidentUrgencyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentUrgencyRuleInput() {
    return this._incidentUrgencyRule.internalValue;
  }

  // scheduled_actions - computed: false, optional: true, required: false
  private _scheduledActions = new ServiceScheduledActionsList(this, "scheduled_actions", false);
  public get scheduledActions() {
    return this._scheduledActions;
  }
  public putScheduledActions(value: ServiceScheduledActions[] | cdktf.IResolvable) {
    this._scheduledActions.internalValue = value;
  }
  public resetScheduledActions() {
    this._scheduledActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionsInput() {
    return this._scheduledActions.internalValue;
  }

  // support_hours - computed: false, optional: true, required: false
  private _supportHours = new ServiceSupportHoursOutputReference(this, "support_hours");
  public get supportHours() {
    return this._supportHours;
  }
  public putSupportHours(value: ServiceSupportHours) {
    this._supportHours.internalValue = value;
  }
  public resetSupportHours() {
    this._supportHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHoursInput() {
    return this._supportHours.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledgement_timeout: cdktf.stringToTerraform(this._acknowledgementTimeout),
      alert_creation: cdktf.stringToTerraform(this._alertCreation),
      alert_grouping: cdktf.stringToTerraform(this._alertGrouping),
      alert_grouping_timeout: cdktf.stringToTerraform(this._alertGroupingTimeout),
      auto_resolve_timeout: cdktf.stringToTerraform(this._autoResolveTimeout),
      description: cdktf.stringToTerraform(this._description),
      escalation_policy: cdktf.stringToTerraform(this._escalationPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      response_play: cdktf.stringToTerraform(this._responsePlay),
      alert_grouping_parameters: serviceAlertGroupingParametersToTerraform(this._alertGroupingParameters.internalValue),
      auto_pause_notifications_parameters: serviceAutoPauseNotificationsParametersToTerraform(this._autoPauseNotificationsParameters.internalValue),
      incident_urgency_rule: serviceIncidentUrgencyRuleToTerraform(this._incidentUrgencyRule.internalValue),
      scheduled_actions: cdktf.listMapper(serviceScheduledActionsToTerraform, true)(this._scheduledActions.internalValue),
      support_hours: serviceSupportHoursToTerraform(this._supportHours.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledgement_timeout: {
        value: cdktf.stringToHclTerraform(this._acknowledgementTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_creation: {
        value: cdktf.stringToHclTerraform(this._alertCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_grouping: {
        value: cdktf.stringToHclTerraform(this._alertGrouping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_grouping_timeout: {
        value: cdktf.stringToHclTerraform(this._alertGroupingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_resolve_timeout: {
        value: cdktf.stringToHclTerraform(this._autoResolveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      escalation_policy: {
        value: cdktf.stringToHclTerraform(this._escalationPolicy),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_play: {
        value: cdktf.stringToHclTerraform(this._responsePlay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_grouping_parameters: {
        value: serviceAlertGroupingParametersToHclTerraform(this._alertGroupingParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAlertGroupingParametersList",
      },
      auto_pause_notifications_parameters: {
        value: serviceAutoPauseNotificationsParametersToHclTerraform(this._autoPauseNotificationsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAutoPauseNotificationsParametersList",
      },
      incident_urgency_rule: {
        value: serviceIncidentUrgencyRuleToHclTerraform(this._incidentUrgencyRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIncidentUrgencyRuleList",
      },
      scheduled_actions: {
        value: cdktf.listMapperHcl(serviceScheduledActionsToHclTerraform, true)(this._scheduledActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceScheduledActionsList",
      },
      support_hours: {
        value: serviceSupportHoursToHclTerraform(this._supportHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSupportHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
