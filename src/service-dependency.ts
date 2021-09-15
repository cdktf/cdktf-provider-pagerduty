// https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDependencyConfig extends cdktf.TerraformMetaArguments {
  /**
  * dependency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#dependency ServiceDependency#dependency}
  */
  readonly dependency: ServiceDependencyDependency[];
}
export interface ServiceDependencyDependencyDependentService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#id ServiceDependency#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}
  */
  readonly type: string;
}

function serviceDependencyDependencyDependentServiceToTerraform(struct?: ServiceDependencyDependencyDependentService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceDependencyDependencySupportingService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#id ServiceDependency#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}
  */
  readonly type: string;
}

function serviceDependencyDependencySupportingServiceToTerraform(struct?: ServiceDependencyDependencySupportingService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceDependencyDependency {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}
  */
  readonly type?: string;
  /**
  * dependent_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#dependent_service ServiceDependency#dependent_service}
  */
  readonly dependentService: ServiceDependencyDependencyDependentService[];
  /**
  * supporting_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#supporting_service ServiceDependency#supporting_service}
  */
  readonly supportingService: ServiceDependencyDependencySupportingService[];
}

function serviceDependencyDependencyToTerraform(struct?: ServiceDependencyDependency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    dependent_service: cdktf.listMapper(serviceDependencyDependencyDependentServiceToTerraform)(struct!.dependentService),
    supporting_service: cdktf.listMapper(serviceDependencyDependencySupportingServiceToTerraform)(struct!.supportingService),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html pagerduty_service_dependency}
*/
export class ServiceDependency extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_service_dependency";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html pagerduty_service_dependency} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDependencyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDependencyConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_dependency',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dependency = config.dependency;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency: ServiceDependencyDependency[];
  public get dependency() {
    return this.interpolationForAttribute('dependency') as any;
  }
  public set dependency(value: ServiceDependencyDependency[]) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependency: cdktf.listMapper(serviceDependencyDependencyToTerraform)(this._dependency),
    };
  }
}
