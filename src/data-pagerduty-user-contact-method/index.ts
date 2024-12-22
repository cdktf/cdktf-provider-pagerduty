// https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyUserContactMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method#id DataPagerdutyUserContactMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the contact method to find in the PagerDuty API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method#label DataPagerdutyUserContactMethod#label}
  */
  readonly label: string;
  /**
  * The type of the contact method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method#type DataPagerdutyUserContactMethod#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method#user_id DataPagerdutyUserContactMethod#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method pagerduty_user_contact_method}
*/
export class DataPagerdutyUserContactMethod extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_user_contact_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyUserContactMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyUserContactMethod to import
  * @param importFromId The id of the existing DataPagerdutyUserContactMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyUserContactMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_user_contact_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/data-sources/user_contact_method pagerduty_user_contact_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyUserContactMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyUserContactMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_contact_method',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.18.2',
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
    this._id = config.id;
    this._label = config.label;
    this._type = config.type;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // blacklisted - computed: true, optional: false, required: false
  public get blacklisted() {
    return this.getBooleanAttribute('blacklisted');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getNumberAttribute('country_code');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
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

  // send_short_email - computed: true, optional: false, required: false
  public get sendShortEmail() {
    return this.getBooleanAttribute('send_short_email');
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
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      type: cdktf.stringToTerraform(this._type),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
