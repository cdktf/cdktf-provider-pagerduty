/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionServicenowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}
  */
  readonly extensionObjects: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}
  */
  readonly extensionSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#name ExtensionServicenow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}
  */
  readonly referer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}
  */
  readonly snowPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}
  */
  readonly snowUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}
  */
  readonly syncOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#target ExtensionServicenow#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#type ExtensionServicenow#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow pagerduty_extension_servicenow}
*/
export class ExtensionServicenow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_extension_servicenow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensionServicenow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensionServicenow to import
  * @param importFromId The id of the existing ExtensionServicenow that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensionServicenow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_extension_servicenow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/extension_servicenow pagerduty_extension_servicenow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionServicenowConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionServicenowConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_extension_servicenow',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.15.4',
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
    this._endpointUrl = config.endpointUrl;
    this._extensionObjects = config.extensionObjects;
    this._extensionSchema = config.extensionSchema;
    this._name = config.name;
    this._referer = config.referer;
    this._snowPassword = config.snowPassword;
    this._snowUser = config.snowUser;
    this._summary = config.summary;
    this._syncOptions = config.syncOptions;
    this._target = config.target;
    this._taskType = config.taskType;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // extension_objects - computed: false, optional: false, required: true
  private _extensionObjects?: string[]; 
  public get extensionObjects() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_objects'));
  }
  public set extensionObjects(value: string[]) {
    this._extensionObjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionObjectsInput() {
    return this._extensionObjects;
  }

  // extension_schema - computed: false, optional: false, required: true
  private _extensionSchema?: string; 
  public get extensionSchema() {
    return this.getStringAttribute('extension_schema');
  }
  public set extensionSchema(value: string) {
    this._extensionSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionSchemaInput() {
    return this._extensionSchema;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // referer - computed: false, optional: false, required: true
  private _referer?: string; 
  public get referer() {
    return this.getStringAttribute('referer');
  }
  public set referer(value: string) {
    this._referer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refererInput() {
    return this._referer;
  }

  // snow_password - computed: false, optional: false, required: true
  private _snowPassword?: string; 
  public get snowPassword() {
    return this.getStringAttribute('snow_password');
  }
  public set snowPassword(value: string) {
    this._snowPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowPasswordInput() {
    return this._snowPassword;
  }

  // snow_user - computed: false, optional: false, required: true
  private _snowUser?: string; 
  public get snowUser() {
    return this.getStringAttribute('snow_user');
  }
  public set snowUser(value: string) {
    this._snowUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowUserInput() {
    return this._snowUser;
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

  // sync_options - computed: false, optional: false, required: true
  private _syncOptions?: string; 
  public get syncOptions() {
    return this.getStringAttribute('sync_options');
  }
  public set syncOptions(value: string) {
    this._syncOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      extension_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionObjects),
      extension_schema: cdktf.stringToTerraform(this._extensionSchema),
      name: cdktf.stringToTerraform(this._name),
      referer: cdktf.stringToTerraform(this._referer),
      snow_password: cdktf.stringToTerraform(this._snowPassword),
      snow_user: cdktf.stringToTerraform(this._snowUser),
      summary: cdktf.stringToTerraform(this._summary),
      sync_options: cdktf.stringToTerraform(this._syncOptions),
      target: cdktf.stringToTerraform(this._target),
      task_type: cdktf.stringToTerraform(this._taskType),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_url: {
        value: cdktf.stringToHclTerraform(this._endpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_objects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionObjects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_schema: {
        value: cdktf.stringToHclTerraform(this._extensionSchema),
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
      referer: {
        value: cdktf.stringToHclTerraform(this._referer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snow_password: {
        value: cdktf.stringToHclTerraform(this._snowPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snow_user: {
        value: cdktf.stringToHclTerraform(this._snowUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: cdktf.stringToHclTerraform(this._syncOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
