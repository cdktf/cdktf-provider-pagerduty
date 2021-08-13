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
  readonly alertGroupingParameters?: ServiceAlertGroupingParameters[];
  /**
  * incident_urgency_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#incident_urgency_rule Service#incident_urgency_rule}
  */
  readonly incidentUrgencyRule?: ServiceIncidentUrgencyRule[];
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
  readonly supportHours?: ServiceSupportHours[];
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

function serviceAlertGroupingParametersConfigToTerraform(struct?: ServiceAlertGroupingParametersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fields),
    timeout: cdktf.numberToTerraform(struct!.timeout),
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
  readonly config?: ServiceAlertGroupingParametersConfig[];
}

function serviceAlertGroupingParametersToTerraform(struct?: ServiceAlertGroupingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: cdktf.listMapper(serviceAlertGroupingParametersConfigToTerraform)(struct!.config),
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

function serviceIncidentUrgencyRuleDuringSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleDuringSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
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

function serviceIncidentUrgencyRuleOutsideSupportHoursToTerraform(struct?: ServiceIncidentUrgencyRuleOutsideSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
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
  readonly duringSupportHours?: ServiceIncidentUrgencyRuleDuringSupportHours[];
  /**
  * outside_support_hours block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#outside_support_hours Service#outside_support_hours}
  */
  readonly outsideSupportHours?: ServiceIncidentUrgencyRuleOutsideSupportHours[];
}

function serviceIncidentUrgencyRuleToTerraform(struct?: ServiceIncidentUrgencyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
    during_support_hours: cdktf.listMapper(serviceIncidentUrgencyRuleDuringSupportHoursToTerraform)(struct!.duringSupportHours),
    outside_support_hours: cdktf.listMapper(serviceIncidentUrgencyRuleOutsideSupportHoursToTerraform)(struct!.outsideSupportHours),
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

function serviceSupportHoursToTerraform(struct?: ServiceSupportHours): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_of_week: cdktf.listMapper(cdktf.numberToTerraform)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html pagerduty_service}
*/
export class Service extends cdktf.TerraformResource {

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
  private _acknowledgementTimeout?: string;
  public get acknowledgementTimeout() {
    return this.getStringAttribute('acknowledgement_timeout');
  }
  public set acknowledgementTimeout(value: string ) {
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
  private _alertCreation?: string;
  public get alertCreation() {
    return this.getStringAttribute('alert_creation');
  }
  public set alertCreation(value: string ) {
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
    return this._alertGrouping
  }

  // alert_grouping_timeout - computed: false, optional: true, required: false
  private _alertGroupingTimeout?: number;
  public get alertGroupingTimeout() {
    return this.getNumberAttribute('alert_grouping_timeout');
  }
  public set alertGroupingTimeout(value: number ) {
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
  private _autoResolveTimeout?: string;
  public get autoResolveTimeout() {
    return this.getStringAttribute('auto_resolve_timeout');
  }
  public set autoResolveTimeout(value: string ) {
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

  // escalation_policy - computed: false, optional: false, required: true
  private _escalationPolicy: string;
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
  private _name: string;
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
  private _alertGroupingParameters?: ServiceAlertGroupingParameters[];
  public get alertGroupingParameters() {
    return this.interpolationForAttribute('alert_grouping_parameters') as any;
  }
  public set alertGroupingParameters(value: ServiceAlertGroupingParameters[] ) {
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
  private _incidentUrgencyRule?: ServiceIncidentUrgencyRule[];
  public get incidentUrgencyRule() {
    return this.interpolationForAttribute('incident_urgency_rule') as any;
  }
  public set incidentUrgencyRule(value: ServiceIncidentUrgencyRule[] ) {
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
  private _scheduledActions?: ServiceScheduledActions[];
  public get scheduledActions() {
    return this.interpolationForAttribute('scheduled_actions') as any;
  }
  public set scheduledActions(value: ServiceScheduledActions[] ) {
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
  private _supportHours?: ServiceSupportHours[];
  public get supportHours() {
    return this.interpolationForAttribute('support_hours') as any;
  }
  public set supportHours(value: ServiceSupportHours[] ) {
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
      alert_grouping_parameters: cdktf.listMapper(serviceAlertGroupingParametersToTerraform)(this._alertGroupingParameters),
      incident_urgency_rule: cdktf.listMapper(serviceIncidentUrgencyRuleToTerraform)(this._incidentUrgencyRule),
      scheduled_actions: cdktf.listMapper(serviceScheduledActionsToTerraform)(this._scheduledActions),
      support_hours: cdktf.listMapper(serviceSupportHoursToTerraform)(this._supportHours),
    };
  }
}
