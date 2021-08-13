// https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#name Ruleset#name}
  */
  readonly name: string;
  /**
  * team block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#team Ruleset#team}
  */
  readonly team?: RulesetTeam[];
}
export interface RulesetTeam {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#id Ruleset#id}
  */
  readonly id: string;
}

function rulesetTeamToTerraform(struct?: RulesetTeam): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html pagerduty_ruleset}
*/
export class Ruleset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html pagerduty_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._team = config.team;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // routing_keys - computed: true, optional: false, required: false
  public get routingKeys() {
    return this.getListAttribute('routing_keys');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // team - computed: false, optional: true, required: false
  private _team?: RulesetTeam[];
  public get team() {
    return this.interpolationForAttribute('team') as any;
  }
  public set team(value: RulesetTeam[] ) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      team: cdktf.listMapper(rulesetTeamToTerraform)(this._team),
    };
  }
}
