// https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * examples 'Amazon CloudWatch', 'New Relic
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html#integration_summary DataPagerdutyServiceIntegration#integration_summary}
  */
  readonly integrationSummary: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html#service_name DataPagerdutyServiceIntegration#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html pagerduty_service_integration}
*/
export class DataPagerdutyServiceIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_service_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html pagerduty_service_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._integrationSummary = config.integrationSummary;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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
    return this._integrationSummary
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
    return this._serviceName
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
}
