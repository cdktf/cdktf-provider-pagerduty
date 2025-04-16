// https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyStandardsResourcesScoresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}
  */
  readonly ids: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}
  */
  readonly resourceType: string;
}
export interface DataPagerdutyStandardsResourcesScoresResourcesScore {
}

export function dataPagerdutyStandardsResourcesScoresResourcesScoreToTerraform(struct?: DataPagerdutyStandardsResourcesScoresResourcesScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPagerdutyStandardsResourcesScoresResourcesScoreToHclTerraform(struct?: DataPagerdutyStandardsResourcesScoresResourcesScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPagerdutyStandardsResourcesScoresResourcesScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyStandardsResourcesScoresResourcesScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passing - computed: true, optional: false, required: false
  public get passing() {
    return this.getNumberAttribute('passing');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface DataPagerdutyStandardsResourcesScoresResourcesStandards {
}

export function dataPagerdutyStandardsResourcesScoresResourcesStandardsToTerraform(struct?: DataPagerdutyStandardsResourcesScoresResourcesStandards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPagerdutyStandardsResourcesScoresResourcesStandardsToHclTerraform(struct?: DataPagerdutyStandardsResourcesScoresResourcesStandards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPagerdutyStandardsResourcesScoresResourcesStandards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyStandardsResourcesScoresResourcesStandards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pass - computed: true, optional: false, required: false
  public get pass() {
    return this.getBooleanAttribute('pass');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPagerdutyStandardsResourcesScoresResourcesStandardsList extends cdktf.ComplexList {

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
  public get(index: number): DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference {
    return new DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPagerdutyStandardsResourcesScoresResources {
}

export function dataPagerdutyStandardsResourcesScoresResourcesToTerraform(struct?: DataPagerdutyStandardsResourcesScoresResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPagerdutyStandardsResourcesScoresResourcesToHclTerraform(struct?: DataPagerdutyStandardsResourcesScoresResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPagerdutyStandardsResourcesScoresResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPagerdutyStandardsResourcesScoresResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPagerdutyStandardsResourcesScoresResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // score - computed: true, optional: false, required: false
  private _score = new DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference(this, "score");
  public get score() {
    return this._score;
  }

  // standards - computed: true, optional: false, required: false
  private _standards = new DataPagerdutyStandardsResourcesScoresResourcesStandardsList(this, "standards", false);
  public get standards() {
    return this._standards;
  }
}

export class DataPagerdutyStandardsResourcesScoresResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPagerdutyStandardsResourcesScoresResourcesOutputReference {
    return new DataPagerdutyStandardsResourcesScoresResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores pagerduty_standards_resources_scores}
*/
export class DataPagerdutyStandardsResourcesScores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_standards_resources_scores";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPagerdutyStandardsResourcesScores to import
  * @param importFromId The id of the existing DataPagerdutyStandardsResourcesScores that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPagerdutyStandardsResourcesScores to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_standards_resources_scores", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/standards_resources_scores pagerduty_standards_resources_scores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyStandardsResourcesScoresConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyStandardsResourcesScoresConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_standards_resources_scores',
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
    this._ids = config.ids;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataPagerdutyStandardsResourcesScoresResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
