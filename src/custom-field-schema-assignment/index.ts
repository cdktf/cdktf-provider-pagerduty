/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldSchemaAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment#id CustomFieldSchemaAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment#schema CustomFieldSchemaAssignment#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment#service CustomFieldSchemaAssignment#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment pagerduty_custom_field_schema_assignment}
*/
export class CustomFieldSchemaAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_custom_field_schema_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/custom_field_schema_assignment pagerduty_custom_field_schema_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldSchemaAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldSchemaAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_custom_field_schema_assignment',
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
    this._id = config.id;
    this._schema = config.schema;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
      service: cdktf.stringToTerraform(this._service),
    };
  }
}
