// https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#contact_method UserNotificationRule#contact_method}
  */
  readonly contactMethod: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#start_delay_in_minutes UserNotificationRule#start_delay_in_minutes}
  */
  readonly startDelayInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#urgency UserNotificationRule#urgency}
  */
  readonly urgency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#user_id UserNotificationRule#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html pagerduty_user_notification_rule}
*/
export class UserNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_user_notification_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html pagerduty_user_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: UserNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contactMethod = config.contactMethod;
    this._startDelayInMinutes = config.startDelayInMinutes;
    this._urgency = config.urgency;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_method - computed: false, optional: false, required: true
  private _contactMethod?: { [key: string]: string } | cdktf.IResolvable; 
  public get contactMethod() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('contact_method') as any;
  }
  public set contactMethod(value: { [key: string]: string } | cdktf.IResolvable) {
    this._contactMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactMethodInput() {
    return this._contactMethod;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // start_delay_in_minutes - computed: false, optional: false, required: true
  private _startDelayInMinutes?: number; 
  public get startDelayInMinutes() {
    return this.getNumberAttribute('start_delay_in_minutes');
  }
  public set startDelayInMinutes(value: number) {
    this._startDelayInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInMinutesInput() {
    return this._startDelayInMinutes;
  }

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_method: cdktf.hashMapper(cdktf.anyToTerraform)(this._contactMethod),
      start_delay_in_minutes: cdktf.numberToTerraform(this._startDelayInMinutes),
      urgency: cdktf.stringToTerraform(this._urgency),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
