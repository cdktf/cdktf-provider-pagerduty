// https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyEventOrchestrationIntegrationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}
  */
  readonly eventOrchestration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}
  */
  readonly label?: string;
}
export interface DataPagerdutyEventOrchestrationIntegrationParametersA {
}

export function dataPagerdutyEventOrchestrationIntegrationParametersAToTerraform(struct?: DataPagerdutyEventOrchestrationIntegrationParametersA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPagerdutyEventOrchestrationIntegrationParametersAToHclTerraform(struct?: DataPagerdutyEventOrchestrationIntegrationParametersA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPagerdutyEventOrchestrationIntegrationParametersA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyEventOrchestrationIntegrationParametersA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // routing_key - computed: true, optional: false, required: false
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPagerdutyEventOrchestrationIntegrationParametersAList extends cdktf.ComplexList {

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
  public get(index: number): DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference {
    return new DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration pagerduty_event_orchestration_integration}
*/
export class DataPagerdutyEventOrchestrationIntegrationA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyEventOrchestrationIntegrationA to import
  * @param importFromId The id of the existing DataPagerdutyEventOrchestrationIntegrationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyEventOrchestrationIntegrationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_event_orchestration_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration pagerduty_event_orchestration_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyEventOrchestrationIntegrationAConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyEventOrchestrationIntegrationAConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_integration',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.24.0',
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
    this._eventOrchestration = config.eventOrchestration;
    this._id = config.id;
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_orchestration - computed: false, optional: false, required: true
  private _eventOrchestration?: string; 
  public get eventOrchestration() {
    return this.getStringAttribute('event_orchestration');
  }
  public set eventOrchestration(value: string) {
    this._eventOrchestration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOrchestrationInput() {
    return this._eventOrchestration;
  }

  // id - computed: false, optional: true, required: false
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataPagerdutyEventOrchestrationIntegrationParametersAList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_orchestration: cdktf.stringToTerraform(this._eventOrchestration),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_orchestration: {
        value: cdktf.stringToHclTerraform(this._eventOrchestration),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
