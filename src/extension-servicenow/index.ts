// https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionServicenowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}
  */
  readonly extensionObjects: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}
  */
  readonly extensionSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#id ExtensionServicenow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#name ExtensionServicenow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}
  */
  readonly referer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}
  */
  readonly snowPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}
  */
  readonly snowUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}
  */
  readonly syncOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#target ExtensionServicenow#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow#type ExtensionServicenow#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow pagerduty_extension_servicenow}
*/
export class ExtensionServicenow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_extension_servicenow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.3/docs/resources/extension_servicenow pagerduty_extension_servicenow} Resource
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
        providerVersion: '2.14.3',
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
    this._endpointUrl = config.endpointUrl;
    this._extensionObjects = config.extensionObjects;
    this._extensionSchema = config.extensionSchema;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
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
}
