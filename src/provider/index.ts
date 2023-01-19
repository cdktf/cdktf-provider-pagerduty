// https://www.terraform.io/docs/providers/pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagerdutyProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#api_url_override PagerdutyProvider#api_url_override}
  */
  readonly apiUrlOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#service_region PagerdutyProvider#service_region}
  */
  readonly serviceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#token PagerdutyProvider#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#user_token PagerdutyProvider#user_token}
  */
  readonly userToken?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#alias PagerdutyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty pagerduty}
*/
export class PagerdutyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagerdutyProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PagerdutyProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.9.2',
        providerVersionConstraint: '~> 2.5'
      },
      terraformProviderSource: 'PagerDuty/pagerduty'
    });
    this._apiUrlOverride = config.apiUrlOverride;
    this._serviceRegion = config.serviceRegion;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._token = config.token;
    this._userToken = config.userToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url_override - computed: false, optional: true, required: false
  private _apiUrlOverride?: string; 
  public get apiUrlOverride() {
    return this._apiUrlOverride;
  }
  public set apiUrlOverride(value: string | undefined) {
    this._apiUrlOverride = value;
  }
  public resetApiUrlOverride() {
    this._apiUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlOverrideInput() {
    return this._apiUrlOverride;
  }

  // service_region - computed: false, optional: true, required: false
  private _serviceRegion?: string; 
  public get serviceRegion() {
    return this._serviceRegion;
  }
  public set serviceRegion(value: string | undefined) {
    this._serviceRegion = value;
  }
  public resetServiceRegion() {
    this._serviceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegionInput() {
    return this._serviceRegion;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_token - computed: false, optional: true, required: false
  private _userToken?: string; 
  public get userToken() {
    return this._userToken;
  }
  public set userToken(value: string | undefined) {
    this._userToken = value;
  }
  public resetUserToken() {
    this._userToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenInput() {
    return this._userToken;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url_override: cdktf.stringToTerraform(this._apiUrlOverride),
      service_region: cdktf.stringToTerraform(this._serviceRegion),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      token: cdktf.stringToTerraform(this._token),
      user_token: cdktf.stringToTerraform(this._userToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
