// https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldSchemaFieldConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}
  */
  readonly defaultValueDatatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}
  */
  readonly defaultValueMultiValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration}
*/
export class CustomFieldSchemaFieldConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_custom_field_schema_field_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldSchemaFieldConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldSchemaFieldConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_custom_field_schema_field_configuration',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.14.0',
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
    this._defaultValue = config.defaultValue;
    this._defaultValueDatatype = config.defaultValueDatatype;
    this._defaultValueMultiValue = config.defaultValueMultiValue;
    this._field = config.field;
    this._id = config.id;
    this._required = config.required;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // default_value_datatype - computed: false, optional: true, required: false
  private _defaultValueDatatype?: string; 
  public get defaultValueDatatype() {
    return this.getStringAttribute('default_value_datatype');
  }
  public set defaultValueDatatype(value: string) {
    this._defaultValueDatatype = value;
  }
  public resetDefaultValueDatatype() {
    this._defaultValueDatatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueDatatypeInput() {
    return this._defaultValueDatatype;
  }

  // default_value_multi_value - computed: false, optional: true, required: false
  private _defaultValueMultiValue?: boolean | cdktf.IResolvable; 
  public get defaultValueMultiValue() {
    return this.getBooleanAttribute('default_value_multi_value');
  }
  public set defaultValueMultiValue(value: boolean | cdktf.IResolvable) {
    this._defaultValueMultiValue = value;
  }
  public resetDefaultValueMultiValue() {
    this._defaultValueMultiValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueMultiValueInput() {
    return this._defaultValueMultiValue;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      default_value_datatype: cdktf.stringToTerraform(this._defaultValueDatatype),
      default_value_multi_value: cdktf.booleanToTerraform(this._defaultValueMultiValue),
      field: cdktf.stringToTerraform(this._field),
      id: cdktf.stringToTerraform(this._id),
      required: cdktf.booleanToTerraform(this._required),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }
}
