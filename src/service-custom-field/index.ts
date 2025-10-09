/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * The kind of data the custom field is allowed to contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}
  */
  readonly dataType: string;
  /**
  * Default value for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A description of the data this field contains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#description ServiceCustomField#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the field. This must be unique across an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the field is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The type of data this field contains. In combination with the `data_type` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}
  */
  readonly fieldType: string;
  /**
  * The name of the field. May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#name ServiceCustomField#name}
  */
  readonly name: string;
  /**
  * field_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}
  */
  readonly fieldOption?: ServiceCustomFieldFieldOption[] | cdktf.IResolvable;
}
export interface ServiceCustomFieldFieldOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#value ServiceCustomField#value}
  */
  readonly value: string;
}

export function serviceCustomFieldFieldOptionToTerraform(struct?: ServiceCustomFieldFieldOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceCustomFieldFieldOptionToHclTerraform(struct?: ServiceCustomFieldFieldOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCustomFieldFieldOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceCustomFieldFieldOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCustomFieldFieldOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._value = value.value;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class ServiceCustomFieldFieldOptionList extends cdktf.ComplexList {
  public internalValue? : ServiceCustomFieldFieldOption[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCustomFieldFieldOptionOutputReference {
    return new ServiceCustomFieldFieldOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field pagerduty_service_custom_field}
*/
export class ServiceCustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_service_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCustomField to import
  * @param importFromId The id of the existing ServiceCustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_service_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/service_custom_field pagerduty_service_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.30.2',
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
    this._fieldType = config.fieldType;
    this._name = config.name;
    this._fieldOption.internalValue = config.fieldOption;
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

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // field_option - computed: false, optional: true, required: false
  private _fieldOption = new ServiceCustomFieldFieldOptionList(this, "field_option", false);
  public get fieldOption() {
    return this._fieldOption;
  }
  public putFieldOption(value: ServiceCustomFieldFieldOption[] | cdktf.IResolvable) {
    this._fieldOption.internalValue = value;
  }
  public resetFieldOption() {
    this._fieldOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionInput() {
    return this._fieldOption.internalValue;
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
      field_type: cdktf.stringToTerraform(this._fieldType),
      name: cdktf.stringToTerraform(this._name),
      field_option: cdktf.listMapper(serviceCustomFieldFieldOptionToTerraform, true)(this._fieldOption.internalValue),
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
      field_type: {
        value: cdktf.stringToHclTerraform(this._fieldType),
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
      field_option: {
        value: cdktf.listMapperHcl(serviceCustomFieldFieldOptionToHclTerraform, true)(this._fieldOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCustomFieldFieldOptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
