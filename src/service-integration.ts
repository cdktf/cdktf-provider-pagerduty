// https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#integration_email ServiceIntegration#integration_email}
  */
  readonly integrationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#integration_key ServiceIntegration#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#name ServiceIntegration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#service ServiceIntegration#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#type ServiceIntegration#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#vendor ServiceIntegration#vendor}
  */
  readonly vendor?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html pagerduty_service_integration}
*/
export class ServiceIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html pagerduty_service_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceIntegrationConfig) {
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
    this._integrationEmail = config.integrationEmail;
    this._integrationKey = config.integrationKey;
    this._name = config.name;
    this._service = config.service;
    this._type = config.type;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_email - computed: true, optional: true, required: false
  private _integrationEmail?: string;
  public get integrationEmail() {
    return this.getStringAttribute('integration_email');
  }
  public set integrationEmail(value: string) {
    this._integrationEmail = value;
  }
  public resetIntegrationEmail() {
    this._integrationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationEmailInput() {
    return this._integrationEmail
  }

  // integration_key - computed: true, optional: true, required: false
  private _integrationKey?: string;
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
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
    return this._type
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string;
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_email: cdktf.stringToTerraform(this._integrationEmail),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      type: cdktf.stringToTerraform(this._type),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }
}
