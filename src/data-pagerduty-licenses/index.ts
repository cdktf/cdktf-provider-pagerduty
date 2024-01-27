/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyLicensesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#id DataPagerdutyLicenses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * licenses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#licenses DataPagerdutyLicenses#licenses}
  */
  readonly licenses?: DataPagerdutyLicensesLicenses[] | cdktf.IResolvable;
}
export interface DataPagerdutyLicensesLicenses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#allocations_available DataPagerdutyLicenses#allocations_available}
  */
  readonly allocationsAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#current_value DataPagerdutyLicenses#current_value}
  */
  readonly currentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#description DataPagerdutyLicenses#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#html_url DataPagerdutyLicenses#html_url}
  */
  readonly htmlUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#id DataPagerdutyLicenses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#name DataPagerdutyLicenses#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#role_group DataPagerdutyLicenses#role_group}
  */
  readonly roleGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#self DataPagerdutyLicenses#self}
  */
  readonly selfAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#summary DataPagerdutyLicenses#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#type DataPagerdutyLicenses#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#valid_roles DataPagerdutyLicenses#valid_roles}
  */
  readonly validRoles?: string[];
}

export function dataPagerdutyLicensesLicensesToTerraform(struct?: DataPagerdutyLicensesLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocations_available: cdktf.numberToTerraform(struct!.allocationsAvailable),
    current_value: cdktf.numberToTerraform(struct!.currentValue),
    description: cdktf.stringToTerraform(struct!.description),
    html_url: cdktf.stringToTerraform(struct!.htmlUrl),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    role_group: cdktf.stringToTerraform(struct!.roleGroup),
    self: cdktf.stringToTerraform(struct!.selfAttribute),
    summary: cdktf.stringToTerraform(struct!.summary),
    type: cdktf.stringToTerraform(struct!.type),
    valid_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validRoles),
  }
}


export function dataPagerdutyLicensesLicensesToHclTerraform(struct?: DataPagerdutyLicensesLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocations_available: {
      value: cdktf.numberToHclTerraform(struct!.allocationsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_value: {
      value: cdktf.numberToHclTerraform(struct!.currentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html_url: {
      value: cdktf.stringToHclTerraform(struct!.htmlUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_group: {
      value: cdktf.stringToHclTerraform(struct!.roleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self: {
      value: cdktf.stringToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPagerdutyLicensesLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPagerdutyLicensesLicenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationsAvailable = this._allocationsAvailable;
    }
    if (this._currentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentValue = this._currentValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._htmlUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlUrl = this._htmlUrl;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroup = this._roleGroup;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.validRoles = this._validRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyLicensesLicenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationsAvailable = undefined;
      this._currentValue = undefined;
      this._description = undefined;
      this._htmlUrl = undefined;
      this._id = undefined;
      this._name = undefined;
      this._roleGroup = undefined;
      this._self = undefined;
      this._summary = undefined;
      this._type = undefined;
      this._validRoles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationsAvailable = value.allocationsAvailable;
      this._currentValue = value.currentValue;
      this._description = value.description;
      this._htmlUrl = value.htmlUrl;
      this._id = value.id;
      this._name = value.name;
      this._roleGroup = value.roleGroup;
      this._self = value.selfAttribute;
      this._summary = value.summary;
      this._type = value.type;
      this._validRoles = value.validRoles;
    }
  }

  // allocations_available - computed: true, optional: true, required: false
  private _allocationsAvailable?: number; 
  public get allocationsAvailable() {
    return this.getNumberAttribute('allocations_available');
  }
  public set allocationsAvailable(value: number) {
    this._allocationsAvailable = value;
  }
  public resetAllocationsAvailable() {
    this._allocationsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationsAvailableInput() {
    return this._allocationsAvailable;
  }

  // current_value - computed: true, optional: true, required: false
  private _currentValue?: number; 
  public get currentValue() {
    return this.getNumberAttribute('current_value');
  }
  public set currentValue(value: number) {
    this._currentValue = value;
  }
  public resetCurrentValue() {
    this._currentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentValueInput() {
    return this._currentValue;
  }

  // description - computed: true, optional: true, required: false
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

  // html_url - computed: true, optional: true, required: false
  private _htmlUrl?: string; 
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }
  public set htmlUrl(value: string) {
    this._htmlUrl = value;
  }
  public resetHtmlUrl() {
    this._htmlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlUrlInput() {
    return this._htmlUrl;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role_group - computed: true, optional: true, required: false
  private _roleGroup?: string; 
  public get roleGroup() {
    return this.getStringAttribute('role_group');
  }
  public set roleGroup(value: string) {
    this._roleGroup = value;
  }
  public resetRoleGroup() {
    this._roleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupInput() {
    return this._roleGroup;
  }

  // self - computed: true, optional: true, required: false
  private _self?: string; 
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }
  public set selfAttribute(value: string) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
  }

  // summary - computed: true, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // valid_roles - computed: true, optional: true, required: false
  private _validRoles?: string[]; 
  public get validRoles() {
    return this.getListAttribute('valid_roles');
  }
  public set validRoles(value: string[]) {
    this._validRoles = value;
  }
  public resetValidRoles() {
    this._validRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRolesInput() {
    return this._validRoles;
  }
}

export class DataPagerdutyLicensesLicensesList extends cdktf.ComplexList {
  public internalValue? : DataPagerdutyLicensesLicenses[] | cdktf.IResolvable

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
  public get(index: number): DataPagerdutyLicensesLicensesOutputReference {
    return new DataPagerdutyLicensesLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses pagerduty_licenses}
*/
export class DataPagerdutyLicenses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_licenses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyLicenses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyLicenses to import
  * @param importFromId The id of the existing DataPagerdutyLicenses that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyLicenses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_licenses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.6.0/docs/data-sources/licenses pagerduty_licenses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyLicensesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyLicensesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_licenses',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.6.0',
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
    this._licenses.internalValue = config.licenses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // licenses - computed: false, optional: true, required: false
  private _licenses = new DataPagerdutyLicensesLicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }
  public putLicenses(value: DataPagerdutyLicensesLicenses[] | cdktf.IResolvable) {
    this._licenses.internalValue = value;
  }
  public resetLicenses() {
    this._licenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      licenses: cdktf.listMapper(dataPagerdutyLicensesLicensesToTerraform, true)(this._licenses.internalValue),
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
      licenses: {
        value: cdktf.listMapperHcl(dataPagerdutyLicensesLicensesToHclTerraform, true)(this._licenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPagerdutyLicensesLicensesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
