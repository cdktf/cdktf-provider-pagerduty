/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option#datatype CustomFieldOption#datatype}
  */
  readonly datatype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option#field CustomFieldOption#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option#id CustomFieldOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option#value CustomFieldOption#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option pagerduty_custom_field_option}
*/
export class CustomFieldOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_custom_field_option";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/resources/custom_field_option pagerduty_custom_field_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldOptionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_custom_field_option',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.16.2',
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
    this._datatype = config.datatype;
    this._field = config.field;
    this._id = config.id;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datatype - computed: false, optional: false, required: true
  private _datatype?: string; 
  public get datatype() {
    return this.getStringAttribute('datatype');
  }
  public set datatype(value: string) {
    this._datatype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datatype: cdktf.stringToTerraform(this._datatype),
      field: cdktf.stringToTerraform(this._field),
      id: cdktf.stringToTerraform(this._id),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
