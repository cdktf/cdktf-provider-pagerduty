// https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserContactMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#address UserContactMethod#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#country_code UserContactMethod#country_code}
  */
  readonly countryCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#label UserContactMethod#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#send_short_email UserContactMethod#send_short_email}
  */
  readonly sendShortEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#type UserContactMethod#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#user_id UserContactMethod#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html pagerduty_user_contact_method}
*/
export class UserContactMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_user_contact_method";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html pagerduty_user_contact_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserContactMethodConfig
  */
  public constructor(scope: Construct, id: string, config: UserContactMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_contact_method',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._address = config.address;
    this._countryCode = config.countryCode;
    this._label = config.label;
    this._sendShortEmail = config.sendShortEmail;
    this._type = config.type;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

  // blacklisted - computed: true, optional: false, required: false
  public get blacklisted() {
    return this.getBooleanAttribute('blacklisted') as any;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: number | undefined; 
  public get countryCode() {
    return this.getNumberAttribute('country_code');
  }
  public set countryCode(value: number | undefined) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // send_short_email - computed: false, optional: true, required: false
  private _sendShortEmail?: boolean | cdktf.IResolvable | undefined; 
  public get sendShortEmail() {
    return this.getBooleanAttribute('send_short_email') as any;
  }
  public set sendShortEmail(value: boolean | cdktf.IResolvable | undefined) {
    this._sendShortEmail = value;
  }
  public resetSendShortEmail() {
    this._sendShortEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendShortEmailInput() {
    return this._sendShortEmail
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
    return this._userId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      country_code: cdktf.numberToTerraform(this._countryCode),
      label: cdktf.stringToTerraform(this._label),
      send_short_email: cdktf.booleanToTerraform(this._sendShortEmail),
      type: cdktf.stringToTerraform(this._type),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
