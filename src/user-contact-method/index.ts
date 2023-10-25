/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserContactMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#address UserContactMethod#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#country_code UserContactMethod#country_code}
  */
  readonly countryCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#id UserContactMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#label UserContactMethod#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#send_short_email UserContactMethod#send_short_email}
  */
  readonly sendShortEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#type UserContactMethod#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#user_id UserContactMethod#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method pagerduty_user_contact_method}
*/
export class UserContactMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_user_contact_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserContactMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserContactMethod to import
  * @param importFromId The id of the existing UserContactMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserContactMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_user_contact_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.3/docs/resources/user_contact_method pagerduty_user_contact_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserContactMethodConfig
  */
  public constructor(scope: Construct, id: string, config: UserContactMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_contact_method',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.0.3',
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
    this._address = config.address;
    this._countryCode = config.countryCode;
    this._id = config.id;
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
    return this._address;
  }

  // blacklisted - computed: true, optional: false, required: false
  public get blacklisted() {
    return this.getBooleanAttribute('blacklisted');
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: number; 
  public get countryCode() {
    return this.getNumberAttribute('country_code');
  }
  public set countryCode(value: number) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
    return this._label;
  }

  // send_short_email - computed: false, optional: true, required: false
  private _sendShortEmail?: boolean | cdktf.IResolvable; 
  public get sendShortEmail() {
    return this.getBooleanAttribute('send_short_email');
  }
  public set sendShortEmail(value: boolean | cdktf.IResolvable) {
    this._sendShortEmail = value;
  }
  public resetSendShortEmail() {
    this._sendShortEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendShortEmailInput() {
    return this._sendShortEmail;
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
      address: cdktf.stringToTerraform(this._address),
      country_code: cdktf.numberToTerraform(this._countryCode),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      send_short_email: cdktf.booleanToTerraform(this._sendShortEmail),
      type: cdktf.stringToTerraform(this._type),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
