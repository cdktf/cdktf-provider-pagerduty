// https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessServiceSubscriberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber#business_service_id BusinessServiceSubscriber#business_service_id}
  */
  readonly businessServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber#id BusinessServiceSubscriber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber#subscriber_id BusinessServiceSubscriber#subscriber_id}
  */
  readonly subscriberId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber#subscriber_type BusinessServiceSubscriber#subscriber_type}
  */
  readonly subscriberType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber pagerduty_business_service_subscriber}
*/
export class BusinessServiceSubscriber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_business_service_subscriber";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service_subscriber pagerduty_business_service_subscriber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessServiceSubscriberConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessServiceSubscriberConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_business_service_subscriber',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '2.11.1',
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
    this._businessServiceId = config.businessServiceId;
    this._id = config.id;
    this._subscriberId = config.subscriberId;
    this._subscriberType = config.subscriberType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_service_id - computed: false, optional: false, required: true
  private _businessServiceId?: string; 
  public get businessServiceId() {
    return this.getStringAttribute('business_service_id');
  }
  public set businessServiceId(value: string) {
    this._businessServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessServiceIdInput() {
    return this._businessServiceId;
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

  // subscriber_id - computed: false, optional: false, required: true
  private _subscriberId?: string; 
  public get subscriberId() {
    return this.getStringAttribute('subscriber_id');
  }
  public set subscriberId(value: string) {
    this._subscriberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdInput() {
    return this._subscriberId;
  }

  // subscriber_type - computed: false, optional: false, required: true
  private _subscriberType?: string; 
  public get subscriberType() {
    return this.getStringAttribute('subscriber_type');
  }
  public set subscriberType(value: string) {
    this._subscriberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberTypeInput() {
    return this._subscriberType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_service_id: cdktf.stringToTerraform(this._businessServiceId),
      id: cdktf.stringToTerraform(this._id),
      subscriber_id: cdktf.stringToTerraform(this._subscriberId),
      subscriber_type: cdktf.stringToTerraform(this._subscriberType),
    };
  }
}
