/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyAlertGroupingSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting#config DataPagerdutyAlertGroupingSetting#config}
  */
  readonly config?: DataPagerdutyAlertGroupingSettingConfigA;
}
export interface DataPagerdutyAlertGroupingSettingConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting#aggregate DataPagerdutyAlertGroupingSetting#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting#fields DataPagerdutyAlertGroupingSetting#fields}
  */
  readonly fields?: string[];
}

export function dataPagerdutyAlertGroupingSettingConfigAToTerraform(struct?: DataPagerdutyAlertGroupingSettingConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function dataPagerdutyAlertGroupingSettingConfigAToHclTerraform(struct?: DataPagerdutyAlertGroupingSettingConfigA | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPagerdutyAlertGroupingSettingConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPagerdutyAlertGroupingSettingConfigA | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyAlertGroupingSettingConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregate = undefined;
      this._fields = undefined;
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

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting pagerduty_alert_grouping_setting}
*/
export class DataPagerdutyAlertGroupingSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_alert_grouping_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyAlertGroupingSetting to import
  * @param importFromId The id of the existing DataPagerdutyAlertGroupingSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyAlertGroupingSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_alert_grouping_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/data-sources/alert_grouping_setting pagerduty_alert_grouping_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyAlertGroupingSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyAlertGroupingSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_alert_grouping_setting',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.28.1',
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
    this._name = config.name;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // services - computed: true, optional: false, required: false
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataPagerdutyAlertGroupingSettingConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataPagerdutyAlertGroupingSettingConfigA) {
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
      name: cdktf.stringToTerraform(this._name),
      config: dataPagerdutyAlertGroupingSettingConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: dataPagerdutyAlertGroupingSettingConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPagerdutyAlertGroupingSettingConfigA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
