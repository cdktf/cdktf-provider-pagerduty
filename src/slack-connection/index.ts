/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlackConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#channel_id SlackConnection#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#id SlackConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#notification_type SlackConnection#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#source_id SlackConnection#source_id}
  */
  readonly sourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#source_type SlackConnection#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#config SlackConnection#config}
  */
  readonly config: SlackConnectionConfigA[] | cdktf.IResolvable;
}
export interface SlackConnectionConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#events SlackConnection#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#priorities SlackConnection#priorities}
  */
  readonly priorities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#urgency SlackConnection#urgency}
  */
  readonly urgency?: string;
}

export function slackConnectionConfigAToTerraform(struct?: SlackConnectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    priorities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.priorities),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function slackConnectionConfigAToHclTerraform(struct?: SlackConnectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    priorities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.priorities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlackConnectionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlackConnectionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._priorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlackConnectionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._priorities = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._priorities = value.priorities;
      this._urgency = value.urgency;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities?: string[]; 
  public get priorities() {
    return this.getListAttribute('priorities');
  }
  public set priorities(value: string[]) {
    this._priorities = value;
  }
  public resetPriorities() {
    this._priorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class SlackConnectionConfigAList extends cdktf.ComplexList {
  public internalValue? : SlackConnectionConfigA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlackConnectionConfigAOutputReference {
    return new SlackConnectionConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection pagerduty_slack_connection}
*/
export class SlackConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_slack_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlackConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlackConnection to import
  * @param importFromId The id of the existing SlackConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlackConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_slack_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/slack_connection pagerduty_slack_connection} Resource
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
        providerVersion: '3.23.1',
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
    this._channelId = config.channelId;
    this._id = config.id;
    this._notificationType = config.notificationType;
    this._sourceId = config.sourceId;
    this._sourceType = config.sourceType;
    this._workspaceId = config.workspaceId;
    this._config.internalValue = config.config;
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
  private _config = new SlackConnectionConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: SlackConnectionConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      id: cdktf.stringToTerraform(this._id),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      config: cdktf.listMapper(slackConnectionConfigAToTerraform, true)(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(slackConnectionConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlackConnectionConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
