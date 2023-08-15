/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#allocations_available DataPagerdutyLicense#allocations_available}
  */
  readonly allocationsAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#current_value DataPagerdutyLicense#current_value}
  */
  readonly currentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#description DataPagerdutyLicense#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#html_url DataPagerdutyLicense#html_url}
  */
  readonly htmlUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#id DataPagerdutyLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#name DataPagerdutyLicense#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#role_group DataPagerdutyLicense#role_group}
  */
  readonly roleGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#self DataPagerdutyLicense#self}
  */
  readonly selfAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#summary DataPagerdutyLicense#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#type DataPagerdutyLicense#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license#valid_roles DataPagerdutyLicense#valid_roles}
  */
  readonly validRoles?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license pagerduty_license}
*/
export class DataPagerdutyLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/data-sources/license pagerduty_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyLicenseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyLicenseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_license',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.15.3',
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
    this._allocationsAvailable = config.allocationsAvailable;
    this._currentValue = config.currentValue;
    this._description = config.description;
    this._htmlUrl = config.htmlUrl;
    this._id = config.id;
    this._name = config.name;
    this._roleGroup = config.roleGroup;
    this._self = config.selfAttribute;
    this._summary = config.summary;
    this._type = config.type;
    this._validRoles = config.validRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocations_available: cdktf.numberToTerraform(this._allocationsAvailable),
      current_value: cdktf.numberToTerraform(this._currentValue),
      description: cdktf.stringToTerraform(this._description),
      html_url: cdktf.stringToTerraform(this._htmlUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_group: cdktf.stringToTerraform(this._roleGroup),
      self: cdktf.stringToTerraform(this._self),
      summary: cdktf.stringToTerraform(this._summary),
      type: cdktf.stringToTerraform(this._type),
      valid_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validRoles),
    };
  }
}
