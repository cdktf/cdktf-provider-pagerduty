// https://www.terraform.io/docs/providers/pagerduty/d/team.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the team to find in the PagerDuty API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html#name DataPagerdutyTeam#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html#parent DataPagerdutyTeam#parent}
  */
  readonly parent?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html pagerduty_team}
*/
export class DataPagerdutyTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_team";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html pagerduty_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyTeamConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_team',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._parent = config.parent;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
    };
  }
}
