/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}
  */
  readonly emailFilterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}
  */
  readonly emailIncidentCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}
  */
  readonly emailParsingFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#id ServiceIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}
  */
  readonly integrationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#name ServiceIntegration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#service ServiceIntegration#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#vendor ServiceIntegration#vendor}
  */
  readonly vendor?: string;
  /**
  * email_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}
  */
  readonly emailFilter?: ServiceIntegrationEmailFilter[] | cdktf.IResolvable;
  /**
  * email_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}
  */
  readonly emailParser?: ServiceIntegrationEmailParser[] | cdktf.IResolvable;
}
export interface ServiceIntegrationEmailFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}
  */
  readonly bodyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}
  */
  readonly bodyRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}
  */
  readonly fromEmailMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}
  */
  readonly fromEmailRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}
  */
  readonly subjectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}
  */
  readonly subjectRegex?: string;
}

export function serviceIntegrationEmailFilterToTerraform(struct?: ServiceIntegrationEmailFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_mode: cdktf.stringToTerraform(struct!.bodyMode),
    body_regex: cdktf.stringToTerraform(struct!.bodyRegex),
    from_email_mode: cdktf.stringToTerraform(struct!.fromEmailMode),
    from_email_regex: cdktf.stringToTerraform(struct!.fromEmailRegex),
    subject_mode: cdktf.stringToTerraform(struct!.subjectMode),
    subject_regex: cdktf.stringToTerraform(struct!.subjectRegex),
  }
}


export function serviceIntegrationEmailFilterToHclTerraform(struct?: ServiceIntegrationEmailFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_mode: {
      value: cdktf.stringToHclTerraform(struct!.bodyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_regex: {
      value: cdktf.stringToHclTerraform(struct!.bodyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email_mode: {
      value: cdktf.stringToHclTerraform(struct!.fromEmailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email_regex: {
      value: cdktf.stringToHclTerraform(struct!.fromEmailRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_mode: {
      value: cdktf.stringToHclTerraform(struct!.subjectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_regex: {
      value: cdktf.stringToHclTerraform(struct!.subjectRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEmailFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEmailFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyMode = this._bodyMode;
    }
    if (this._bodyRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyRegex = this._bodyRegex;
    }
    if (this._fromEmailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmailMode = this._fromEmailMode;
    }
    if (this._fromEmailRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmailRegex = this._fromEmailRegex;
    }
    if (this._subjectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectMode = this._subjectMode;
    }
    if (this._subjectRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectRegex = this._subjectRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyMode = undefined;
      this._bodyRegex = undefined;
      this._fromEmailMode = undefined;
      this._fromEmailRegex = undefined;
      this._subjectMode = undefined;
      this._subjectRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyMode = value.bodyMode;
      this._bodyRegex = value.bodyRegex;
      this._fromEmailMode = value.fromEmailMode;
      this._fromEmailRegex = value.fromEmailRegex;
      this._subjectMode = value.subjectMode;
      this._subjectRegex = value.subjectRegex;
    }
  }

  // body_mode - computed: false, optional: true, required: false
  private _bodyMode?: string; 
  public get bodyMode() {
    return this.getStringAttribute('body_mode');
  }
  public set bodyMode(value: string) {
    this._bodyMode = value;
  }
  public resetBodyMode() {
    this._bodyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyModeInput() {
    return this._bodyMode;
  }

  // body_regex - computed: false, optional: true, required: false
  private _bodyRegex?: string; 
  public get bodyRegex() {
    return this.getStringAttribute('body_regex');
  }
  public set bodyRegex(value: string) {
    this._bodyRegex = value;
  }
  public resetBodyRegex() {
    this._bodyRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyRegexInput() {
    return this._bodyRegex;
  }

  // from_email_mode - computed: false, optional: true, required: false
  private _fromEmailMode?: string; 
  public get fromEmailMode() {
    return this.getStringAttribute('from_email_mode');
  }
  public set fromEmailMode(value: string) {
    this._fromEmailMode = value;
  }
  public resetFromEmailMode() {
    this._fromEmailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailModeInput() {
    return this._fromEmailMode;
  }

  // from_email_regex - computed: false, optional: true, required: false
  private _fromEmailRegex?: string; 
  public get fromEmailRegex() {
    return this.getStringAttribute('from_email_regex');
  }
  public set fromEmailRegex(value: string) {
    this._fromEmailRegex = value;
  }
  public resetFromEmailRegex() {
    this._fromEmailRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailRegexInput() {
    return this._fromEmailRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_mode - computed: false, optional: true, required: false
  private _subjectMode?: string; 
  public get subjectMode() {
    return this.getStringAttribute('subject_mode');
  }
  public set subjectMode(value: string) {
    this._subjectMode = value;
  }
  public resetSubjectMode() {
    this._subjectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectModeInput() {
    return this._subjectMode;
  }

  // subject_regex - computed: false, optional: true, required: false
  private _subjectRegex?: string; 
  public get subjectRegex() {
    return this.getStringAttribute('subject_regex');
  }
  public set subjectRegex(value: string) {
    this._subjectRegex = value;
  }
  public resetSubjectRegex() {
    this._subjectRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectRegexInput() {
    return this._subjectRegex;
  }
}

export class ServiceIntegrationEmailFilterList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEmailFilter[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEmailFilterOutputReference {
    return new ServiceIntegrationEmailFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEmailParserMatchPredicatePredicatePredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}
  */
  readonly matcher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#part ServiceIntegration#part}
  */
  readonly part: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type: string;
}

export function serviceIntegrationEmailParserMatchPredicatePredicatePredicateToTerraform(struct?: ServiceIntegrationEmailParserMatchPredicatePredicatePredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: cdktf.stringToTerraform(struct!.matcher),
    part: cdktf.stringToTerraform(struct!.part),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceIntegrationEmailParserMatchPredicatePredicatePredicateToHclTerraform(struct?: ServiceIntegrationEmailParserMatchPredicatePredicatePredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    part: {
      value: cdktf.stringToHclTerraform(struct!.part),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEmailParserMatchPredicatePredicatePredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._part !== undefined) {
      hasAnyValues = true;
      internalValueResult.part = this._part;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailParserMatchPredicatePredicatePredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matcher = undefined;
      this._part = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matcher = value.matcher;
      this._part = value.part;
      this._type = value.type;
    }
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // part - computed: false, optional: false, required: true
  private _part?: string; 
  public get part() {
    return this.getStringAttribute('part');
  }
  public set part(value: string) {
    this._part = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
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

export class ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference {
    return new ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEmailParserMatchPredicatePredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#matcher ServiceIntegration#matcher}
  */
  readonly matcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#part ServiceIntegration#part}
  */
  readonly part?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type: string;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#predicate ServiceIntegration#predicate}
  */
  readonly predicate?: ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[] | cdktf.IResolvable;
}

export function serviceIntegrationEmailParserMatchPredicatePredicateToTerraform(struct?: ServiceIntegrationEmailParserMatchPredicatePredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: cdktf.stringToTerraform(struct!.matcher),
    part: cdktf.stringToTerraform(struct!.part),
    type: cdktf.stringToTerraform(struct!.type),
    predicate: cdktf.listMapper(serviceIntegrationEmailParserMatchPredicatePredicatePredicateToTerraform, true)(struct!.predicate),
  }
}


export function serviceIntegrationEmailParserMatchPredicatePredicateToHclTerraform(struct?: ServiceIntegrationEmailParserMatchPredicatePredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    part: {
      value: cdktf.stringToHclTerraform(struct!.part),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate: {
      value: cdktf.listMapperHcl(serviceIntegrationEmailParserMatchPredicatePredicatePredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEmailParserMatchPredicatePredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._part !== undefined) {
      hasAnyValues = true;
      internalValueResult.part = this._part;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailParserMatchPredicatePredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matcher = undefined;
      this._part = undefined;
      this._type = undefined;
      this._predicate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matcher = value.matcher;
      this._part = value.part;
      this._type = value.type;
      this._predicate.internalValue = value.predicate;
    }
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // part - computed: false, optional: true, required: false
  private _part?: string; 
  public get part() {
    return this.getStringAttribute('part');
  }
  public set part(value: string) {
    this._part = value;
  }
  public resetPart() {
    this._part = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
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

  // predicate - computed: false, optional: true, required: false
  private _predicate = new ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList(this, "predicate", false);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: ServiceIntegrationEmailParserMatchPredicatePredicatePredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}

export class ServiceIntegrationEmailParserMatchPredicatePredicateList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEmailParserMatchPredicatePredicate[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference {
    return new ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEmailParserMatchPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type: string;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#predicate ServiceIntegration#predicate}
  */
  readonly predicate?: ServiceIntegrationEmailParserMatchPredicatePredicate[] | cdktf.IResolvable;
}

export function serviceIntegrationEmailParserMatchPredicateToTerraform(struct?: ServiceIntegrationEmailParserMatchPredicateOutputReference | ServiceIntegrationEmailParserMatchPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    predicate: cdktf.listMapper(serviceIntegrationEmailParserMatchPredicatePredicateToTerraform, true)(struct!.predicate),
  }
}


export function serviceIntegrationEmailParserMatchPredicateToHclTerraform(struct?: ServiceIntegrationEmailParserMatchPredicateOutputReference | ServiceIntegrationEmailParserMatchPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate: {
      value: cdktf.listMapperHcl(serviceIntegrationEmailParserMatchPredicatePredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEmailParserMatchPredicatePredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEmailParserMatchPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEmailParserMatchPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailParserMatchPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._predicate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._predicate.internalValue = value.predicate;
    }
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

  // predicate - computed: false, optional: true, required: false
  private _predicate = new ServiceIntegrationEmailParserMatchPredicatePredicateList(this, "predicate", false);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: ServiceIntegrationEmailParserMatchPredicatePredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}
export interface ServiceIntegrationEmailParserValueExtractor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}
  */
  readonly endsBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#part ServiceIntegration#part}
  */
  readonly part: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#regex ServiceIntegration#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}
  */
  readonly startsAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#value_name ServiceIntegration#value_name}
  */
  readonly valueName: string;
}

export function serviceIntegrationEmailParserValueExtractorToTerraform(struct?: ServiceIntegrationEmailParserValueExtractor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_before: cdktf.stringToTerraform(struct!.endsBefore),
    part: cdktf.stringToTerraform(struct!.part),
    regex: cdktf.stringToTerraform(struct!.regex),
    starts_after: cdktf.stringToTerraform(struct!.startsAfter),
    type: cdktf.stringToTerraform(struct!.type),
    value_name: cdktf.stringToTerraform(struct!.valueName),
  }
}


export function serviceIntegrationEmailParserValueExtractorToHclTerraform(struct?: ServiceIntegrationEmailParserValueExtractor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_before: {
      value: cdktf.stringToHclTerraform(struct!.endsBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    part: {
      value: cdktf.stringToHclTerraform(struct!.part),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_after: {
      value: cdktf.stringToHclTerraform(struct!.startsAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_name: {
      value: cdktf.stringToHclTerraform(struct!.valueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEmailParserValueExtractorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEmailParserValueExtractor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsBefore = this._endsBefore;
    }
    if (this._part !== undefined) {
      hasAnyValues = true;
      internalValueResult.part = this._part;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._startsAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsAfter = this._startsAfter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueName = this._valueName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailParserValueExtractor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsBefore = undefined;
      this._part = undefined;
      this._regex = undefined;
      this._startsAfter = undefined;
      this._type = undefined;
      this._valueName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsBefore = value.endsBefore;
      this._part = value.part;
      this._regex = value.regex;
      this._startsAfter = value.startsAfter;
      this._type = value.type;
      this._valueName = value.valueName;
    }
  }

  // ends_before - computed: false, optional: true, required: false
  private _endsBefore?: string; 
  public get endsBefore() {
    return this.getStringAttribute('ends_before');
  }
  public set endsBefore(value: string) {
    this._endsBefore = value;
  }
  public resetEndsBefore() {
    this._endsBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsBeforeInput() {
    return this._endsBefore;
  }

  // part - computed: false, optional: false, required: true
  private _part?: string; 
  public get part() {
    return this.getStringAttribute('part');
  }
  public set part(value: string) {
    this._part = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
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

  // starts_after - computed: false, optional: true, required: false
  private _startsAfter?: string; 
  public get startsAfter() {
    return this.getStringAttribute('starts_after');
  }
  public set startsAfter(value: string) {
    this._startsAfter = value;
  }
  public resetStartsAfter() {
    this._startsAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsAfterInput() {
    return this._startsAfter;
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

  // value_name - computed: false, optional: false, required: true
  private _valueName?: string; 
  public get valueName() {
    return this.getStringAttribute('value_name');
  }
  public set valueName(value: string) {
    this._valueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueNameInput() {
    return this._valueName;
  }
}

export class ServiceIntegrationEmailParserValueExtractorList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEmailParserValueExtractor[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEmailParserValueExtractorOutputReference {
    return new ServiceIntegrationEmailParserValueExtractorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEmailParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#action ServiceIntegration#action}
  */
  readonly action: string;
  /**
  * match_predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#match_predicate ServiceIntegration#match_predicate}
  */
  readonly matchPredicate: ServiceIntegrationEmailParserMatchPredicate;
  /**
  * value_extractor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#value_extractor ServiceIntegration#value_extractor}
  */
  readonly valueExtractor?: ServiceIntegrationEmailParserValueExtractor[] | cdktf.IResolvable;
}

export function serviceIntegrationEmailParserToTerraform(struct?: ServiceIntegrationEmailParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    match_predicate: serviceIntegrationEmailParserMatchPredicateToTerraform(struct!.matchPredicate),
    value_extractor: cdktf.listMapper(serviceIntegrationEmailParserValueExtractorToTerraform, true)(struct!.valueExtractor),
  }
}


export function serviceIntegrationEmailParserToHclTerraform(struct?: ServiceIntegrationEmailParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_predicate: {
      value: serviceIntegrationEmailParserMatchPredicateToHclTerraform(struct!.matchPredicate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEmailParserMatchPredicateList",
    },
    value_extractor: {
      value: cdktf.listMapperHcl(serviceIntegrationEmailParserValueExtractorToHclTerraform, true)(struct!.valueExtractor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEmailParserValueExtractorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEmailParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEmailParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._matchPredicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPredicate = this._matchPredicate?.internalValue;
    }
    if (this._valueExtractor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueExtractor = this._valueExtractor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEmailParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._matchPredicate.internalValue = undefined;
      this._valueExtractor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._matchPredicate.internalValue = value.matchPredicate;
      this._valueExtractor.internalValue = value.valueExtractor;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // match_predicate - computed: false, optional: false, required: true
  private _matchPredicate = new ServiceIntegrationEmailParserMatchPredicateOutputReference(this, "match_predicate");
  public get matchPredicate() {
    return this._matchPredicate;
  }
  public putMatchPredicate(value: ServiceIntegrationEmailParserMatchPredicate) {
    this._matchPredicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPredicateInput() {
    return this._matchPredicate.internalValue;
  }

  // value_extractor - computed: false, optional: true, required: false
  private _valueExtractor = new ServiceIntegrationEmailParserValueExtractorList(this, "value_extractor", false);
  public get valueExtractor() {
    return this._valueExtractor;
  }
  public putValueExtractor(value: ServiceIntegrationEmailParserValueExtractor[] | cdktf.IResolvable) {
    this._valueExtractor.internalValue = value;
  }
  public resetValueExtractor() {
    this._valueExtractor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExtractorInput() {
    return this._valueExtractor.internalValue;
  }
}

export class ServiceIntegrationEmailParserList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEmailParser[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEmailParserOutputReference {
    return new ServiceIntegrationEmailParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration pagerduty_service_integration}
*/
export class ServiceIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceIntegration to import
  * @param importFromId The id of the existing ServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.1/docs/resources/service_integration pagerduty_service_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.18.1',
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
    this._emailFilterMode = config.emailFilterMode;
    this._emailIncidentCreation = config.emailIncidentCreation;
    this._emailParsingFallback = config.emailParsingFallback;
    this._id = config.id;
    this._integrationEmail = config.integrationEmail;
    this._integrationKey = config.integrationKey;
    this._name = config.name;
    this._service = config.service;
    this._type = config.type;
    this._vendor = config.vendor;
    this._emailFilter.internalValue = config.emailFilter;
    this._emailParser.internalValue = config.emailParser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_filter_mode - computed: true, optional: true, required: false
  private _emailFilterMode?: string; 
  public get emailFilterMode() {
    return this.getStringAttribute('email_filter_mode');
  }
  public set emailFilterMode(value: string) {
    this._emailFilterMode = value;
  }
  public resetEmailFilterMode() {
    this._emailFilterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFilterModeInput() {
    return this._emailFilterMode;
  }

  // email_incident_creation - computed: true, optional: true, required: false
  private _emailIncidentCreation?: string; 
  public get emailIncidentCreation() {
    return this.getStringAttribute('email_incident_creation');
  }
  public set emailIncidentCreation(value: string) {
    this._emailIncidentCreation = value;
  }
  public resetEmailIncidentCreation() {
    this._emailIncidentCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIncidentCreationInput() {
    return this._emailIncidentCreation;
  }

  // email_parsing_fallback - computed: true, optional: true, required: false
  private _emailParsingFallback?: string; 
  public get emailParsingFallback() {
    return this.getStringAttribute('email_parsing_fallback');
  }
  public set emailParsingFallback(value: string) {
    this._emailParsingFallback = value;
  }
  public resetEmailParsingFallback() {
    this._emailParsingFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailParsingFallbackInput() {
    return this._emailParsingFallback;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // integration_email - computed: true, optional: true, required: false
  private _integrationEmail?: string; 
  public get integrationEmail() {
    return this.getStringAttribute('integration_email');
  }
  public set integrationEmail(value: string) {
    this._integrationEmail = value;
  }
  public resetIntegrationEmail() {
    this._integrationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationEmailInput() {
    return this._integrationEmail;
  }

  // integration_key - computed: true, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // email_filter - computed: false, optional: true, required: false
  private _emailFilter = new ServiceIntegrationEmailFilterList(this, "email_filter", false);
  public get emailFilter() {
    return this._emailFilter;
  }
  public putEmailFilter(value: ServiceIntegrationEmailFilter[] | cdktf.IResolvable) {
    this._emailFilter.internalValue = value;
  }
  public resetEmailFilter() {
    this._emailFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFilterInput() {
    return this._emailFilter.internalValue;
  }

  // email_parser - computed: false, optional: true, required: false
  private _emailParser = new ServiceIntegrationEmailParserList(this, "email_parser", false);
  public get emailParser() {
    return this._emailParser;
  }
  public putEmailParser(value: ServiceIntegrationEmailParser[] | cdktf.IResolvable) {
    this._emailParser.internalValue = value;
  }
  public resetEmailParser() {
    this._emailParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailParserInput() {
    return this._emailParser.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_filter_mode: cdktf.stringToTerraform(this._emailFilterMode),
      email_incident_creation: cdktf.stringToTerraform(this._emailIncidentCreation),
      email_parsing_fallback: cdktf.stringToTerraform(this._emailParsingFallback),
      id: cdktf.stringToTerraform(this._id),
      integration_email: cdktf.stringToTerraform(this._integrationEmail),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      type: cdktf.stringToTerraform(this._type),
      vendor: cdktf.stringToTerraform(this._vendor),
      email_filter: cdktf.listMapper(serviceIntegrationEmailFilterToTerraform, true)(this._emailFilter.internalValue),
      email_parser: cdktf.listMapper(serviceIntegrationEmailParserToTerraform, true)(this._emailParser.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_filter_mode: {
        value: cdktf.stringToHclTerraform(this._emailFilterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_incident_creation: {
        value: cdktf.stringToHclTerraform(this._emailIncidentCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_parsing_fallback: {
        value: cdktf.stringToHclTerraform(this._emailParsingFallback),
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
      integration_email: {
        value: cdktf.stringToHclTerraform(this._integrationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_filter: {
        value: cdktf.listMapperHcl(serviceIntegrationEmailFilterToHclTerraform, true)(this._emailFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEmailFilterList",
      },
      email_parser: {
        value: cdktf.listMapperHcl(serviceIntegrationEmailParserToHclTerraform, true)(this._emailParser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEmailParserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
