// https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertGroupingSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}
  */
  readonly services: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}
  */
  readonly config?: AlertGroupingSettingConfigA;
}
export interface AlertGroupingSettingConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}
  */
  readonly timeWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}
  */
  readonly timeout?: number;
}

export function alertGroupingSettingConfigAToTerraform(struct?: AlertGroupingSettingConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function alertGroupingSettingConfigAToHclTerraform(struct?: AlertGroupingSettingConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate: {
      value: cdktf.stringToHclTerraform(struct!.aggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertGroupingSettingConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertGroupingSettingConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertGroupingSettingConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregate = undefined;
      this._fields = undefined;
      this._timeWindow = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregate = value.aggregate;
      this._fields = value.fields;
      this._timeWindow = value.timeWindow;
      this._timeout = value.timeout;
    }
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // time_window - computed: true, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting pagerduty_alert_grouping_setting}
*/
export class AlertGroupingSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_alert_grouping_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertGroupingSetting to import
  * @param importFromId The id of the existing AlertGroupingSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertGroupingSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_alert_grouping_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/alert_grouping_setting pagerduty_alert_grouping_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertGroupingSettingConfig
  */
  public constructor(scope: Construct, id: string, config: AlertGroupingSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_alert_grouping_setting',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.21.0',
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
    this._description = config.description;
    this._name = config.name;
    this._services = config.services;
    this._type = config.type;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
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

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AlertGroupingSettingConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AlertGroupingSettingConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      type: cdktf.stringToTerraform(this._type),
      config: alertGroupingSettingConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: alertGroupingSettingConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertGroupingSettingConfigA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
