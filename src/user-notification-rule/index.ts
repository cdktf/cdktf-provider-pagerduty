/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#contact_method UserNotificationRule#contact_method}
  */
  readonly contactMethod: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#id UserNotificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#start_delay_in_minutes UserNotificationRule#start_delay_in_minutes}
  */
  readonly startDelayInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#urgency UserNotificationRule#urgency}
  */
  readonly urgency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#user_id UserNotificationRule#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule pagerduty_user_notification_rule}
*/
export class UserNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_user_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserNotificationRule to import
  * @param importFromId The id of the existing UserNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_user_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/user_notification_rule pagerduty_user_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: UserNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.23.1',
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
    this._contactMethod = config.contactMethod;
    this._id = config.id;
    this._startDelayInMinutes = config.startDelayInMinutes;
    this._urgency = config.urgency;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_method - computed: false, optional: false, required: true
  private _contactMethod?: { [key: string]: string }; 
  public get contactMethod() {
    return this.getStringMapAttribute('contact_method');
  }
  public set contactMethod(value: { [key: string]: string }) {
    this._contactMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactMethodInput() {
    return this._contactMethod;
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
      contact_method: cdktf.hashMapper(cdktf.stringToTerraform)(this._contactMethod),
      id: cdktf.stringToTerraform(this._id),
      start_delay_in_minutes: cdktf.numberToTerraform(this._startDelayInMinutes),
      urgency: cdktf.stringToTerraform(this._urgency),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_method: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._contactMethod),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_delay_in_minutes: {
        value: cdktf.numberToHclTerraform(this._startDelayInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      urgency: {
        value: cdktf.stringToHclTerraform(this._urgency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
