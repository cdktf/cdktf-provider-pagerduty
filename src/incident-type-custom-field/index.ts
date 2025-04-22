// https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentTypeCustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}
  */
  readonly fieldOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}
  */
  readonly fieldType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}
  */
  readonly incidentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field}
*/
export class IncidentTypeCustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_incident_type_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentTypeCustomField to import
  * @param importFromId The id of the existing IncidentTypeCustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentTypeCustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_incident_type_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.1/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentTypeCustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentTypeCustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_incident_type_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.24.1',
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
    this._dataType = config.dataType;
    this._defaultValue = config.defaultValue;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._fieldOptions = config.fieldOptions;
    this._fieldType = config.fieldType;
    this._incidentType = config.incidentType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // field_options - computed: false, optional: true, required: false
  private _fieldOptions?: string[]; 
  public get fieldOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('field_options'));
  }
  public set fieldOptions(value: string[]) {
    this._fieldOptions = value;
  }
  public resetFieldOptions() {
    this._fieldOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionsInput() {
    return this._fieldOptions;
  }

  // field_type - computed: false, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_type - computed: false, optional: false, required: true
  private _incidentType?: string; 
  public get incidentType() {
    return this.getStringAttribute('incident_type');
  }
  public set incidentType(value: string) {
    this._incidentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeInput() {
    return this._incidentType;
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

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type: cdktf.stringToTerraform(this._dataType),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      field_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldOptions),
      field_type: cdktf.stringToTerraform(this._fieldType),
      incident_type: cdktf.stringToTerraform(this._incidentType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      field_type: {
        value: cdktf.stringToHclTerraform(this._fieldType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_type: {
        value: cdktf.stringToHclTerraform(this._incidentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
