// https://www.terraform.io/docs/providers/pagerduty/r/service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#acknowledgement_timeout Service#acknowledgement_timeout}
  */
  readonly acknowledgementTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_creation Service#alert_creation}
  */
  readonly alertCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping Service#alert_grouping}
  */
  readonly alertGrouping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping_timeout Service#alert_grouping_timeout}
  */
  readonly alertGroupingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#auto_resolve_timeout Service#auto_resolve_timeout}
  */
  readonly autoResolveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#description Service#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#escalation_policy Service#escalation_policy}
  */
  readonly escalationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#name Service#name}
  */
  readonly name: string;
  /**
  * alert_grouping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping_parameters Service#alert_grouping_parameters}
  */
  readonly alertGroupingParameters?: ServiceAlertGroupingParameters;
  /**
  * incident_urgency_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#incident_urgency_rule Service#incident_urgency_rule}
  */
  readonly incidentUrgencyRule?: ServiceIncidentUrgencyRule;
  /**
  * scheduled_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#scheduled_actions Service#scheduled_actions}
  */
  readonly scheduledActions?: ServiceScheduledActions[];
  /**
  * support_hours block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#support_hours Service#support_hours}
  */
  readonly supportHours?: ServiceSupportHours;
}
export interface ServiceAlertGroupingParametersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#aggregate Service#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#fields Service#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#timeout Service#timeout}
  */
  readonly timeout?: number;
}

function serviceAlertGroupingParametersConfigToTerraform(struct?: ServiceAlertGroupingParametersConfigOutputReference | ServiceAlertGroupingParametersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fields),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export class ServiceAlertGroupingParametersConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string | undefined; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string | undefined) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[] | undefined; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[] | undefined) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface ServiceAlertGroupingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#config Service#config}
  */
  readonly config?: ServiceAlertGroupingParametersConfig;
}

function serviceAlertGroupingParametersToTerraform(struct?: ServiceAlertGroupingParametersOutputReference | ServiceAlertGroupingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: serviceAlertGroupingParametersConfigToTerraform(struct!.config),
  }
}

export class ServiceAlertGroupingParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // config - computed: false, optional: true, required: false
  private _config?: ServiceAlertGroupingParametersConfig | undefined; 
  private __configOutput = new ServiceAlertGroupingParametersConfigOutputReference(this as any, "config", true);
  public get config() {
    return this.__configOutput;
  }
  public putConfig(value: ServiceAlertGroupingParametersConfig | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }
}
export interface ServiceIncidentUrgencyRuleDuringSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}
  */
  readonly urgency?: string;
}

function serviceIncidentUrgencyRuleDuringSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference | ServiceIncidentUrgencyRuleDuringSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}

export class ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string | undefined; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string | undefined) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency
  }
}
export interface ServiceIncidentUrgencyRuleOutsideSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}
  */
  readonly urgency?: string;
}

function serviceIncidentUrgencyRuleOutsideSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference | ServiceIncidentUrgencyRuleOutsideSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}

export class ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string | undefined; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string | undefined) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency
  }
}
export interface ServiceIncidentUrgencyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}
  */
  readonly urgency?: string;
  /**
  * during_support_hours block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#during_support_hours Service#during_support_hours}
  */
  readonly duringSupportHours?: ServiceIncidentUrgencyRuleDuringSupportHours;
  /**
  * outside_support_hours block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#outside_support_hours Service#outside_support_hours}
  */
  readonly outsideSupportHours?: ServiceIncidentUrgencyRuleOutsideSupportHours;
}

function serviceIncidentUrgencyRuleToTerraform(struct?: ServiceIncidentUrgencyRuleOutputReference | ServiceIncidentUrgencyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class ServiceIncidentUrgencyRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._type
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string | undefined; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string | undefined) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency
  }

  // during_support_hours - computed: false, optional: true, required: false
  private _duringSupportHours?: ServiceIncidentUrgencyRuleDuringSupportHours | undefined; 
  private __duringSupportHoursOutput = new ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(this as any, "during_support_hours", true);
  public get duringSupportHours() {
    return this.__duringSupportHoursOutput;
  }
  public putDuringSupportHours(value: ServiceIncidentUrgencyRuleDuringSupportHours | undefined) {
    this._duringSupportHours = value;
  }
  public resetDuringSupportHours() {
    this._duringSupportHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duringSupportHoursInput() {
    return this._duringSupportHours
  }

  // outside_support_hours - computed: false, optional: true, required: false
  private _outsideSupportHours?: ServiceIncidentUrgencyRuleOutsideSupportHours | undefined; 
  private __outsideSupportHoursOutput = new ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(this as any, "outside_support_hours", true);
  public get outsideSupportHours() {
    return this.__outsideSupportHoursOutput;
  }
  public putOutsideSupportHours(value: ServiceIncidentUrgencyRuleOutsideSupportHours | undefined) {
    this._outsideSupportHours = value;
  }
  public resetOutsideSupportHours() {
    this._outsideSupportHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSupportHoursInput() {
    return this._outsideSupportHours
  }
}
export interface ServiceScheduledActionsAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#name Service#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
}

function serviceScheduledActionsAtToTerraform(struct?: ServiceScheduledActionsAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceScheduledActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#to_urgency Service#to_urgency}
  */
  readonly toUrgency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#at Service#at}
  */
  readonly at?: ServiceScheduledActionsAt[];
}

function serviceScheduledActionsToTerraform(struct?: ServiceScheduledActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_urgency: cdktf.stringToTerraform(struct!.toUrgency),
    type: cdktf.stringToTerraform(struct!.type),
    at: cdktf.listMapper(serviceScheduledActionsAtToTerraform)(struct!.at),
  }
}

export interface ServiceSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#days_of_week Service#days_of_week}
  */
  readonly daysOfWeek?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#end_time Service#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#start_time Service#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#time_zone Service#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}
  */
  readonly type?: string;
}

function serviceSupportHoursToTerraform(struct?: ServiceSupportHoursOutputReference | ServiceSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.numberToTerraform)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ServiceSupportHoursOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: number[] | undefined; 
  public get daysOfWeek() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('days_of_week') as any;
  }
  public set daysOfWeek(value: number[] | undefined) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string | undefined; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html pagerduty_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html pagerduty_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acknowledgementTimeout = config.acknowledgementTimeout;
    this._alertCreation = config.alertCreation;
    this._alertGrouping = config.alertGrouping;
    this._alertGroupingTimeout = config.alertGroupingTimeout;
    this._autoResolveTimeout = config.autoResolveTimeout;
    this._description = config.description;
    this._escalationPolicy = config.escalationPolicy;
    this._name = config.name;
    this._alertGroupingParameters = config.alertGroupingParameters;
    this._incidentUrgencyRule = config.incidentUrgencyRule;
    this._scheduledActions = config.scheduledActions;
    this._supportHours = config.supportHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledgement_timeout - computed: false, optional: true, required: false
  private _acknowledgementTimeout?: string | undefined; 
  public get acknowledgementTimeout() {
    return this.getStringAttribute('acknowledgement_timeout');
  }
  public set acknowledgementTimeout(value: string | undefined) {
    this._acknowledgementTimeout = value;
  }
  public resetAcknowledgementTimeout() {
    this._acknowledgementTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgementTimeoutInput() {
    return this._acknowledgementTimeout
  }

  // alert_creation - computed: false, optional: true, required: false
  private _alertCreation?: string | undefined; 
  public get alertCreation() {
    return this.getStringAttribute('alert_creation');
  }
  public set alertCreation(value: string | undefined) {
    this._alertCreation = value;
  }
  public resetAlertCreation() {
    this._alertCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertCreationInput() {
    return this._alertCreation
  }

  // alert_grouping - computed: true, optional: true, required: false
  private _alertGrouping?: string | undefined; 
  public get alertGrouping() {
    return this.getStringAttribute('alert_grouping');
  }
  public set alertGrouping(value: string | undefined) {
    this._alertGrouping = value;
  }
  public resetAlertGrouping() {
    this._alertGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingInput() {
    return this._alertGrouping
  }

  // alert_grouping_timeout - computed: false, optional: true, required: false
  private _alertGroupingTimeout?: number | undefined; 
  public get alertGroupingTimeout() {
    return this.getNumberAttribute('alert_grouping_timeout');
  }
  public set alertGroupingTimeout(value: number | undefined) {
    this._alertGroupingTimeout = value;
  }
  public resetAlertGroupingTimeout() {
    this._alertGroupingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingTimeoutInput() {
    return this._alertGroupingTimeout
  }

  // auto_resolve_timeout - computed: false, optional: true, required: false
  private _autoResolveTimeout?: string | undefined; 
  public get autoResolveTimeout() {
    return this.getStringAttribute('auto_resolve_timeout');
  }
  public set autoResolveTimeout(value: string | undefined) {
    this._autoResolveTimeout = value;
  }
  public resetAutoResolveTimeout() {
    this._autoResolveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveTimeoutInput() {
    return this._autoResolveTimeout
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._escalationPolicy
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // alert_grouping_parameters - computed: false, optional: true, required: false
  private _alertGroupingParameters?: ServiceAlertGroupingParameters | undefined; 
  private __alertGroupingParametersOutput = new ServiceAlertGroupingParametersOutputReference(this as any, "alert_grouping_parameters", true);
  public get alertGroupingParameters() {
    return this.__alertGroupingParametersOutput;
  }
  public putAlertGroupingParameters(value: ServiceAlertGroupingParameters | undefined) {
    this._alertGroupingParameters = value;
  }
  public resetAlertGroupingParameters() {
    this._alertGroupingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingParametersInput() {
    return this._alertGroupingParameters
  }

  // incident_urgency_rule - computed: false, optional: true, required: false
  private _incidentUrgencyRule?: ServiceIncidentUrgencyRule | undefined; 
  private __incidentUrgencyRuleOutput = new ServiceIncidentUrgencyRuleOutputReference(this as any, "incident_urgency_rule", true);
  public get incidentUrgencyRule() {
    return this.__incidentUrgencyRuleOutput;
  }
  public putIncidentUrgencyRule(value: ServiceIncidentUrgencyRule | undefined) {
    this._incidentUrgencyRule = value;
  }
  public resetIncidentUrgencyRule() {
    this._incidentUrgencyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentUrgencyRuleInput() {
    return this._incidentUrgencyRule
  }

  // scheduled_actions - computed: false, optional: true, required: false
  private _scheduledActions?: ServiceScheduledActions[] | undefined; 
  public get scheduledActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scheduled_actions') as any;
  }
  public set scheduledActions(value: ServiceScheduledActions[] | undefined) {
    this._scheduledActions = value;
  }
  public resetScheduledActions() {
    this._scheduledActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionsInput() {
    return this._scheduledActions
  }

  // support_hours - computed: false, optional: true, required: false
  private _supportHours?: ServiceSupportHours | undefined; 
  private __supportHoursOutput = new ServiceSupportHoursOutputReference(this as any, "support_hours", true);
  public get supportHours() {
    return this.__supportHoursOutput;
  }
  public putSupportHours(value: ServiceSupportHours | undefined) {
    this._supportHours = value;
  }
  public resetSupportHours() {
    this._supportHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHoursInput() {
    return this._supportHours
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledgement_timeout: cdktf.stringToTerraform(this._acknowledgementTimeout),
      alert_creation: cdktf.stringToTerraform(this._alertCreation),
      alert_grouping: cdktf.stringToTerraform(this._alertGrouping),
      alert_grouping_timeout: cdktf.numberToTerraform(this._alertGroupingTimeout),
      auto_resolve_timeout: cdktf.stringToTerraform(this._autoResolveTimeout),
      description: cdktf.stringToTerraform(this._description),
      escalation_policy: cdktf.stringToTerraform(this._escalationPolicy),
      name: cdktf.stringToTerraform(this._name),
      alert_grouping_parameters: serviceAlertGroupingParametersToTerraform(this._alertGroupingParameters),
      incident_urgency_rule: serviceIncidentUrgencyRuleToTerraform(this._incidentUrgencyRule),
      scheduled_actions: cdktf.listMapper(serviceScheduledActionsToTerraform)(this._scheduledActions),
      support_hours: serviceSupportHoursToTerraform(this._supportHours),
    };
  }
}
