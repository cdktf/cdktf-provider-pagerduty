// https://www.terraform.io/docs/providers/pagerduty/d/priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the priority to find in the PagerDuty API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/priority#name DataPagerdutyPriority#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/priority pagerduty_priority}
*/
export class DataPagerdutyPriority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_priority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/d/priority pagerduty_priority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyPriorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyPriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_priority',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
