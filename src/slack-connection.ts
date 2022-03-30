// https://www.terraform.io/docs/providers/pagerduty/r/slack_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlackConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#channel_id SlackConnection#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#notification_type SlackConnection#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#source_id SlackConnection#source_id}
  */
  readonly sourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#source_type SlackConnection#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#workspace_id SlackConnection#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#config SlackConnection#config}
  */
  readonly config: SlackConnectionConfigA[] | cdktf.IResolvable;
}
export interface SlackConnectionConfigA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#events SlackConnection#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#priorities SlackConnection#priorities}
  */
  readonly priorities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection#urgency SlackConnection#urgency}
  */
  readonly urgency?: string;
}

export function slackConnectionConfigAToTerraform(struct?: SlackConnectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    priorities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.priorities),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection pagerduty_slack_connection}
*/
export class SlackConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_slack_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection pagerduty_slack_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlackConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SlackConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_slack_connection',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '1.11.0',
        providerVersionConstraint: '~> 1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._channelId = config.channelId;
    this._notificationType = config.notificationType;
    this._sourceId = config.sourceId;
    this._sourceType = config.sourceType;
    this._workspaceId = config.workspaceId;
    this._config = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // config - computed: false, optional: false, required: true
  private _config?: SlackConnectionConfigA[] | cdktf.IResolvable; 
  public get config() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config');
  }
  public set config(value: SlackConnectionConfigA[] | cdktf.IResolvable) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      config: cdktf.listMapper(slackConnectionConfigAToTerraform)(this._config),
    };
  }
}
