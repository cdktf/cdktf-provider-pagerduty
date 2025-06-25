/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * examples "Amazon CloudWatch", "New Relic"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration#integration_summary DataPagerdutyServiceIntegration#integration_summary}
  */
  readonly integrationSummary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration#service_name DataPagerdutyServiceIntegration#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration pagerduty_service_integration}
*/
export class DataPagerdutyServiceIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyServiceIntegration to import
  * @param importFromId The id of the existing DataPagerdutyServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/service_integration pagerduty_service_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.26.3',
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
    this._integrationSummary = config.integrationSummary;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_key - computed: true, optional: false, required: false
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }

  // integration_summary - computed: false, optional: false, required: true
  private _integrationSummary?: string; 
  public get integrationSummary() {
    return this.getStringAttribute('integration_summary');
  }
  public set integrationSummary(value: string) {
    this._integrationSummary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSummaryInput() {
    return this._integrationSummary;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_summary: cdktf.stringToTerraform(this._integrationSummary),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_summary: {
        value: cdktf.stringToHclTerraform(this._integrationSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
