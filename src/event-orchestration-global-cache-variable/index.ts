// https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventOrchestrationGlobalCacheVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}
  */
  readonly eventOrchestration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}
  */
  readonly condition?: EventOrchestrationGlobalCacheVariableCondition[] | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}
  */
  readonly configuration: EventOrchestrationGlobalCacheVariableConfiguration;
}
export interface EventOrchestrationGlobalCacheVariableCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}
  */
  readonly expression: string;
}

export function eventOrchestrationGlobalCacheVariableConditionToTerraform(struct?: EventOrchestrationGlobalCacheVariableCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function eventOrchestrationGlobalCacheVariableConditionToHclTerraform(struct?: EventOrchestrationGlobalCacheVariableCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCacheVariableConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCacheVariableCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCacheVariableCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class EventOrchestrationGlobalCacheVariableConditionList extends cdktf.ComplexList {
  public internalValue? : EventOrchestrationGlobalCacheVariableCondition[] | cdktf.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCacheVariableConditionOutputReference {
    return new EventOrchestrationGlobalCacheVariableConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCacheVariableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}
  */
  readonly ttlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}
  */
  readonly type: string;
}

export function eventOrchestrationGlobalCacheVariableConfigurationToTerraform(struct?: EventOrchestrationGlobalCacheVariableConfigurationOutputReference | EventOrchestrationGlobalCacheVariableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    source: cdktf.stringToTerraform(struct!.source),
    ttl_seconds: cdktf.numberToTerraform(struct!.ttlSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eventOrchestrationGlobalCacheVariableConfigurationToHclTerraform(struct?: EventOrchestrationGlobalCacheVariableConfigurationOutputReference | EventOrchestrationGlobalCacheVariableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.ttlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCacheVariableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalCacheVariableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._ttlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSeconds = this._ttlSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCacheVariableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._source = undefined;
      this._ttlSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._source = value.source;
      this._ttlSeconds = value.ttlSeconds;
      this._type = value.type;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // ttl_seconds - computed: false, optional: true, required: false
  private _ttlSeconds?: number; 
  public get ttlSeconds() {
    return this.getNumberAttribute('ttl_seconds');
  }
  public set ttlSeconds(value: number) {
    this._ttlSeconds = value;
  }
  public resetTtlSeconds() {
    this._ttlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsInput() {
    return this._ttlSeconds;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}
*/
export class EventOrchestrationGlobalCacheVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_global_cache_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventOrchestrationGlobalCacheVariable to import
  * @param importFromId The id of the existing EventOrchestrationGlobalCacheVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventOrchestrationGlobalCacheVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_event_orchestration_global_cache_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.1/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventOrchestrationGlobalCacheVariableConfig
  */
  public constructor(scope: Construct, id: string, config: EventOrchestrationGlobalCacheVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_global_cache_variable',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.11.1',
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
    this._disabled = config.disabled;
    this._eventOrchestration = config.eventOrchestration;
    this._name = config.name;
    this._condition.internalValue = config.condition;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

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

  // condition - computed: false, optional: true, required: false
  private _condition = new EventOrchestrationGlobalCacheVariableConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: EventOrchestrationGlobalCacheVariableCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new EventOrchestrationGlobalCacheVariableConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EventOrchestrationGlobalCacheVariableConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      event_orchestration: cdktf.stringToTerraform(this._eventOrchestration),
      name: cdktf.stringToTerraform(this._name),
      condition: cdktf.listMapper(eventOrchestrationGlobalCacheVariableConditionToTerraform, true)(this._condition.internalValue),
      configuration: eventOrchestrationGlobalCacheVariableConfigurationToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_orchestration: {
        value: cdktf.stringToHclTerraform(this._eventOrchestration),
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
      condition: {
        value: cdktf.listMapperHcl(eventOrchestrationGlobalCacheVariableConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalCacheVariableConditionList",
      },
      configuration: {
        value: eventOrchestrationGlobalCacheVariableConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalCacheVariableConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
