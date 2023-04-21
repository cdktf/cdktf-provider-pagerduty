// https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#datatype CustomField#datatype}
  */
  readonly datatype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#description CustomField#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#display_name CustomField#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#fixed_options CustomField#fixed_options}
  */
  readonly fixedOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#id CustomField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#multi_value CustomField#multi_value}
  */
  readonly multiValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field#name CustomField#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field pagerduty_custom_field}
*/
export class CustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_custom_field";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/custom_field pagerduty_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.14.3',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._fixedOptions = config.fixedOptions;
    this._id = config.id;
    this._multiValue = config.multiValue;
    this._name = config.name;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fixed_options - computed: false, optional: true, required: false
  private _fixedOptions?: boolean | cdktf.IResolvable; 
  public get fixedOptions() {
    return this.getBooleanAttribute('fixed_options');
  }
  public set fixedOptions(value: boolean | cdktf.IResolvable) {
    this._fixedOptions = value;
  }
  public resetFixedOptions() {
    this._fixedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedOptionsInput() {
    return this._fixedOptions;
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

  // multi_value - computed: false, optional: true, required: false
  private _multiValue?: boolean | cdktf.IResolvable; 
  public get multiValue() {
    return this.getBooleanAttribute('multi_value');
  }
  public set multiValue(value: boolean | cdktf.IResolvable) {
    this._multiValue = value;
  }
  public resetMultiValue() {
    this._multiValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueInput() {
    return this._multiValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datatype: cdktf.stringToTerraform(this._datatype),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      fixed_options: cdktf.booleanToTerraform(this._fixedOptions),
      id: cdktf.stringToTerraform(this._id),
      multi_value: cdktf.booleanToTerraform(this._multiValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
