// https://www.terraform.io/docs/providers/pagerduty/r/response_play
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponsePlayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#conference_number ResponsePlay#conference_number}
  */
  readonly conferenceNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#conference_url ResponsePlay#conference_url}
  */
  readonly conferenceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#description ResponsePlay#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#from ResponsePlay#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#name ResponsePlay#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#responders_message ResponsePlay#responders_message}
  */
  readonly respondersMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#runnability ResponsePlay#runnability}
  */
  readonly runnability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#subscribers_message ResponsePlay#subscribers_message}
  */
  readonly subscribersMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#team ResponsePlay#team}
  */
  readonly team?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#type ResponsePlay#type}
  */
  readonly type?: string;
  /**
  * responder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#responder ResponsePlay#responder}
  */
  readonly responder?: ResponsePlayResponder[];
  /**
  * subscriber block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#subscriber ResponsePlay#subscriber}
  */
  readonly subscriber?: ResponsePlaySubscriber[];
}
export interface ResponsePlayResponder {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#description ResponsePlay#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#id ResponsePlay#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#name ResponsePlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#type ResponsePlay#type}
  */
  readonly type?: string;
}

export function responsePlayResponderToTerraform(struct?: ResponsePlayResponder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ResponsePlaySubscriber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#id ResponsePlay#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play#type ResponsePlay#type}
  */
  readonly type?: string;
}

export function responsePlaySubscriberToTerraform(struct?: ResponsePlaySubscriber): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play pagerduty_response_play}
*/
export class ResponsePlay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_response_play";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play pagerduty_response_play} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponsePlayConfig
  */
  public constructor(scope: Construct, id: string, config: ResponsePlayConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_response_play',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._conferenceNumber = config.conferenceNumber;
    this._conferenceUrl = config.conferenceUrl;
    this._description = config.description;
    this._from = config.from;
    this._name = config.name;
    this._respondersMessage = config.respondersMessage;
    this._runnability = config.runnability;
    this._subscribersMessage = config.subscribersMessage;
    this._team = config.team;
    this._type = config.type;
    this._responder = config.responder;
    this._subscriber = config.subscriber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conference_number - computed: false, optional: true, required: false
  private _conferenceNumber?: string; 
  public get conferenceNumber() {
    return this.getStringAttribute('conference_number');
  }
  public set conferenceNumber(value: string) {
    this._conferenceNumber = value;
  }
  public resetConferenceNumber() {
    this._conferenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceNumberInput() {
    return this._conferenceNumber;
  }

  // conference_url - computed: false, optional: true, required: false
  private _conferenceUrl?: string; 
  public get conferenceUrl() {
    return this.getStringAttribute('conference_url');
  }
  public set conferenceUrl(value: string) {
    this._conferenceUrl = value;
  }
  public resetConferenceUrl() {
    this._conferenceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceUrlInput() {
    return this._conferenceUrl;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // responders_message - computed: false, optional: true, required: false
  private _respondersMessage?: string; 
  public get respondersMessage() {
    return this.getStringAttribute('responders_message');
  }
  public set respondersMessage(value: string) {
    this._respondersMessage = value;
  }
  public resetRespondersMessage() {
    this._respondersMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondersMessageInput() {
    return this._respondersMessage;
  }

  // runnability - computed: false, optional: true, required: false
  private _runnability?: string; 
  public get runnability() {
    return this.getStringAttribute('runnability');
  }
  public set runnability(value: string) {
    this._runnability = value;
  }
  public resetRunnability() {
    this._runnability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnabilityInput() {
    return this._runnability;
  }

  // subscribers_message - computed: false, optional: true, required: false
  private _subscribersMessage?: string; 
  public get subscribersMessage() {
    return this.getStringAttribute('subscribers_message');
  }
  public set subscribersMessage(value: string) {
    this._subscribersMessage = value;
  }
  public resetSubscribersMessage() {
    this._subscribersMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersMessageInput() {
    return this._subscribersMessage;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // type - computed: false, optional: true, required: false
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

  // responder - computed: false, optional: true, required: false
  private _responder?: ResponsePlayResponder[]; 
  public get responder() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('responder') as any;
  }
  public set responder(value: ResponsePlayResponder[]) {
    this._responder = value;
  }
  public resetResponder() {
    this._responder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderInput() {
    return this._responder;
  }

  // subscriber - computed: false, optional: true, required: false
  private _subscriber?: ResponsePlaySubscriber[]; 
  public get subscriber() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subscriber') as any;
  }
  public set subscriber(value: ResponsePlaySubscriber[]) {
    this._subscriber = value;
  }
  public resetSubscriber() {
    this._subscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conference_number: cdktf.stringToTerraform(this._conferenceNumber),
      conference_url: cdktf.stringToTerraform(this._conferenceUrl),
      description: cdktf.stringToTerraform(this._description),
      from: cdktf.stringToTerraform(this._from),
      name: cdktf.stringToTerraform(this._name),
      responders_message: cdktf.stringToTerraform(this._respondersMessage),
      runnability: cdktf.stringToTerraform(this._runnability),
      subscribers_message: cdktf.stringToTerraform(this._subscribersMessage),
      team: cdktf.stringToTerraform(this._team),
      type: cdktf.stringToTerraform(this._type),
      responder: cdktf.listMapper(responsePlayResponderToTerraform)(this._responder),
      subscriber: cdktf.listMapper(responsePlaySubscriberToTerraform)(this._subscriber),
    };
  }
}
