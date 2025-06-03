/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagerdutyProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#api_url_override PagerdutyProvider#api_url_override}
  */
  readonly apiUrlOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#insecure_tls PagerdutyProvider#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#service_region PagerdutyProvider#service_region}
  */
  readonly serviceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#token PagerdutyProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#user_token PagerdutyProvider#user_token}
  */
  readonly userToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#alias PagerdutyProvider#alias}
  */
  readonly alias?: string;
  /**
  * use_app_oauth_scoped_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}
  */
  readonly useAppOauthScopedToken?: PagerdutyProviderUseAppOauthScopedToken;
}
export interface PagerdutyProviderUseAppOauthScopedToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#pd_client_id PagerdutyProvider#pd_client_id}
  */
  readonly pdClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#pd_client_secret PagerdutyProvider#pd_client_secret}
  */
  readonly pdClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#pd_subdomain PagerdutyProvider#pd_subdomain}
  */
  readonly pdSubdomain?: string;
}

export function pagerdutyProviderUseAppOauthScopedTokenToTerraform(struct?: PagerdutyProviderUseAppOauthScopedToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pd_client_id: cdktf.stringToTerraform(struct!.pdClientId),
    pd_client_secret: cdktf.stringToTerraform(struct!.pdClientSecret),
    pd_subdomain: cdktf.stringToTerraform(struct!.pdSubdomain),
  }
}


export function pagerdutyProviderUseAppOauthScopedTokenToHclTerraform(struct?: PagerdutyProviderUseAppOauthScopedToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pd_client_id: {
      value: cdktf.stringToHclTerraform(struct!.pdClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.pdClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.pdSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs pagerduty}
*/
export class PagerdutyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagerdutyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagerdutyProvider to import
  * @param importFromId The id of the existing PagerdutyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagerdutyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagerdutyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PagerdutyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.26.0',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'PagerDuty/pagerduty'
    });
    this._apiUrlOverride = config.apiUrlOverride;
    this._insecureTls = config.insecureTls;
    this._serviceRegion = config.serviceRegion;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._token = config.token;
    this._userToken = config.userToken;
    this._alias = config.alias;
    this._useAppOauthScopedToken = config.useAppOauthScopedToken;
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

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this._insecureTls;
  }
  public set insecureTls(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
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

  // use_app_oauth_scoped_token - computed: false, optional: true, required: false
  private _useAppOauthScopedToken?: PagerdutyProviderUseAppOauthScopedToken; 
  public get useAppOauthScopedToken() {
    return this._useAppOauthScopedToken;
  }
  public set useAppOauthScopedToken(value: PagerdutyProviderUseAppOauthScopedToken | undefined) {
    this._useAppOauthScopedToken = value;
  }
  public resetUseAppOauthScopedToken() {
    this._useAppOauthScopedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAppOauthScopedTokenInput() {
    return this._useAppOauthScopedToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url_override: cdktf.stringToTerraform(this._apiUrlOverride),
      insecure_tls: cdktf.booleanToTerraform(this._insecureTls),
      service_region: cdktf.stringToTerraform(this._serviceRegion),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      token: cdktf.stringToTerraform(this._token),
      user_token: cdktf.stringToTerraform(this._userToken),
      alias: cdktf.stringToTerraform(this._alias),
      use_app_oauth_scoped_token: pagerdutyProviderUseAppOauthScopedTokenToTerraform(this._useAppOauthScopedToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url_override: {
        value: cdktf.stringToHclTerraform(this._apiUrlOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_region: {
        value: cdktf.stringToHclTerraform(this._serviceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_credentials_validation: {
        value: cdktf.booleanToHclTerraform(this._skipCredentialsValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_token: {
        value: cdktf.stringToHclTerraform(this._userToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_app_oauth_scoped_token: {
        value: pagerdutyProviderUseAppOauthScopedTokenToHclTerraform(this._useAppOauthScopedToken),
        isBlock: true,
        type: "list",
        storageClassType: "PagerdutyProviderUseAppOauthScopedTokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
