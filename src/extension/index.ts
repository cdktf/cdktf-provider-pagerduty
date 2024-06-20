/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#config Extension#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#endpoint_url Extension#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#extension_objects Extension#extension_objects}
  */
  readonly extensionObjects: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#extension_schema Extension#extension_schema}
  */
  readonly extensionSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#name Extension#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#type Extension#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension pagerduty_extension}
*/
export class Extension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Extension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Extension to import
  * @param importFromId The id of the existing Extension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Extension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/extension pagerduty_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_extension',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.14.2',
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
    this._config = config.config;
    this._endpointUrl = config.endpointUrl;
    this._extensionObjects = config.extensionObjects;
    this._extensionSchema = config.extensionSchema;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // endpoint_url - computed: true, optional: true, required: false
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

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
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
      config: cdktf.stringToTerraform(this._config),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      extension_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionObjects),
      extension_schema: cdktf.stringToTerraform(this._extensionSchema),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
