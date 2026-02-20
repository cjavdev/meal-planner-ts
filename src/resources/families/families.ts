// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MealPlansAPI from './meal-plans';
import {
  MealPlan,
  MealPlanCreateParams,
  MealPlanDeleteParams,
  MealPlanGenerateShoppingListParams,
  MealPlanGenerateShoppingListResponse,
  MealPlanListParams,
  MealPlanListResponse,
  MealPlanLockParams,
  MealPlanRetrieveParams,
  MealPlanUpdateParams,
  MealPlans,
} from './meal-plans';
import * as MembersAPI from './members';
import {
  Member,
  MemberCreateParams,
  MemberDeleteParams,
  MemberListParams,
  MemberListResponse,
  MemberRetrieveParams,
  MemberUpdateParams,
  Members,
} from './members';
import * as PantryAPI from './pantry';
import {
  Pantry,
  PantryBulkAddParams,
  PantryBulkAddResponse,
  PantryBulkRemoveParams,
  PantryBulkRemoveResponse,
  PantryCreateParams,
  PantryDeleteParams,
  PantryItem,
  PantryListParams,
  PantryListResponse,
  PantryRetrieveParams,
  PantryUpdateParams,
} from './pantry';
import * as SchoolLunchesAPI from './school-lunches';
import {
  SchoolLunch,
  SchoolLunchDeleteParams,
  SchoolLunchRetrieveParams,
  SchoolLunchRetrieveSchoolLunchesParams,
  SchoolLunchRetrieveSchoolLunchesResponse,
  SchoolLunchSchoolLunchesParams,
  SchoolLunchUpdateParams,
  SchoolLunches,
} from './school-lunches';
import * as ShoppingListsAPI from './shopping-lists';
import {
  ShoppingList,
  ShoppingListCompleteParams,
  ShoppingListCreateParams,
  ShoppingListDeleteParams,
  ShoppingListListParams,
  ShoppingListListResponse,
  ShoppingListMergeParams,
  ShoppingListRetrieveParams,
  ShoppingListUpdateParams,
  ShoppingLists,
} from './shopping-lists';
import * as SnacksAPI from './snacks';
import {
  Snack,
  SnackApproveParams,
  SnackCreateParams,
  SnackDeleteParams,
  SnackListParams,
  SnackListResponse,
  SnackRejectParams,
  SnackRetrieveParams,
  SnackUpdateParams,
  Snacks,
} from './snacks';
import * as RecipesAPI from './recipes/recipes';
import {
  Recipe,
  RecipeCreateParams,
  RecipeDeleteParams,
  RecipeListParams,
  RecipeListResponse,
  RecipeRetrieveParams,
  RecipeRetrieveVersionsParams,
  RecipeRetrieveVersionsResponse,
  RecipeUpdateParams,
  Recipes,
} from './recipes/recipes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Families extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  mealPlans: MealPlansAPI.MealPlans = new MealPlansAPI.MealPlans(this._client);
  shoppingLists: ShoppingListsAPI.ShoppingLists = new ShoppingListsAPI.ShoppingLists(this._client);
  recipes: RecipesAPI.Recipes = new RecipesAPI.Recipes(this._client);
  pantry: PantryAPI.Pantry = new PantryAPI.Pantry(this._client);
  snacks: SnacksAPI.Snacks = new SnacksAPI.Snacks(this._client);
  schoolLunches: SchoolLunchesAPI.SchoolLunches = new SchoolLunchesAPI.SchoolLunches(this._client);

  /**
   * Create a family
   *
   * @example
   * ```ts
   * const family = await client.families.create({
   *   name: 'Smith Family',
   * });
   * ```
   */
  create(body: FamilyCreateParams, options?: RequestOptions): APIPromise<Family> {
    return this._client.post('/families', { body, ...options });
  }

  /**
   * Get a family by ID
   *
   * @example
   * ```ts
   * const family = await client.families.retrieve('fam_abc123');
   * ```
   */
  retrieve(familyID: string, options?: RequestOptions): APIPromise<Family> {
    return this._client.get(path`/families/${familyID}`, options);
  }

  /**
   * Update a family
   *
   * @example
   * ```ts
   * const family = await client.families.update('fam_abc123', {
   *   name: 'Smith Family (Updated)',
   * });
   * ```
   */
  update(familyID: string, params: FamilyUpdateParams, options?: RequestOptions): APIPromise<Family> {
    const { 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List families
   *
   * @example
   * ```ts
   * const families = await client.families.list();
   * ```
   */
  list(
    query: FamilyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FamilyListResponse> {
    return this._client.get('/families', { query, ...options });
  }

  /**
   * Delete a family
   *
   * @example
   * ```ts
   * await client.families.delete('fam_abc123');
   * ```
   */
  delete(familyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/families/${familyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Family {
  id: string;

  createdAt: string;

  name: string;

  updatedAt: string;
}

export interface FamilyListResponse {
  data: Array<Family>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface FamilyCreateParams {
  name: string;
}

export interface FamilyUpdateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export interface FamilyListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

Families.Members = Members;
Families.MealPlans = MealPlans;
Families.ShoppingLists = ShoppingLists;
Families.Recipes = Recipes;
Families.Pantry = Pantry;
Families.Snacks = Snacks;
Families.SchoolLunches = SchoolLunches;

export declare namespace Families {
  export {
    type Family as Family,
    type FamilyListResponse as FamilyListResponse,
    type FamilyCreateParams as FamilyCreateParams,
    type FamilyUpdateParams as FamilyUpdateParams,
    type FamilyListParams as FamilyListParams,
  };

  export {
    Members as Members,
    type Member as Member,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
  };

  export {
    MealPlans as MealPlans,
    type MealPlan as MealPlan,
    type MealPlanListResponse as MealPlanListResponse,
    type MealPlanGenerateShoppingListResponse as MealPlanGenerateShoppingListResponse,
    type MealPlanCreateParams as MealPlanCreateParams,
    type MealPlanRetrieveParams as MealPlanRetrieveParams,
    type MealPlanUpdateParams as MealPlanUpdateParams,
    type MealPlanListParams as MealPlanListParams,
    type MealPlanDeleteParams as MealPlanDeleteParams,
    type MealPlanGenerateShoppingListParams as MealPlanGenerateShoppingListParams,
    type MealPlanLockParams as MealPlanLockParams,
  };

  export {
    ShoppingLists as ShoppingLists,
    type ShoppingList as ShoppingList,
    type ShoppingListListResponse as ShoppingListListResponse,
    type ShoppingListCreateParams as ShoppingListCreateParams,
    type ShoppingListRetrieveParams as ShoppingListRetrieveParams,
    type ShoppingListUpdateParams as ShoppingListUpdateParams,
    type ShoppingListListParams as ShoppingListListParams,
    type ShoppingListDeleteParams as ShoppingListDeleteParams,
    type ShoppingListCompleteParams as ShoppingListCompleteParams,
    type ShoppingListMergeParams as ShoppingListMergeParams,
  };

  export {
    Recipes as Recipes,
    type Recipe as Recipe,
    type RecipeListResponse as RecipeListResponse,
    type RecipeRetrieveVersionsResponse as RecipeRetrieveVersionsResponse,
    type RecipeCreateParams as RecipeCreateParams,
    type RecipeRetrieveParams as RecipeRetrieveParams,
    type RecipeUpdateParams as RecipeUpdateParams,
    type RecipeListParams as RecipeListParams,
    type RecipeDeleteParams as RecipeDeleteParams,
    type RecipeRetrieveVersionsParams as RecipeRetrieveVersionsParams,
  };

  export {
    Pantry as Pantry,
    type PantryItem as PantryItem,
    type PantryListResponse as PantryListResponse,
    type PantryBulkAddResponse as PantryBulkAddResponse,
    type PantryBulkRemoveResponse as PantryBulkRemoveResponse,
    type PantryCreateParams as PantryCreateParams,
    type PantryRetrieveParams as PantryRetrieveParams,
    type PantryUpdateParams as PantryUpdateParams,
    type PantryListParams as PantryListParams,
    type PantryDeleteParams as PantryDeleteParams,
    type PantryBulkAddParams as PantryBulkAddParams,
    type PantryBulkRemoveParams as PantryBulkRemoveParams,
  };

  export {
    Snacks as Snacks,
    type Snack as Snack,
    type SnackListResponse as SnackListResponse,
    type SnackCreateParams as SnackCreateParams,
    type SnackRetrieveParams as SnackRetrieveParams,
    type SnackUpdateParams as SnackUpdateParams,
    type SnackListParams as SnackListParams,
    type SnackDeleteParams as SnackDeleteParams,
    type SnackApproveParams as SnackApproveParams,
    type SnackRejectParams as SnackRejectParams,
  };

  export {
    SchoolLunches as SchoolLunches,
    type SchoolLunch as SchoolLunch,
    type SchoolLunchRetrieveSchoolLunchesResponse as SchoolLunchRetrieveSchoolLunchesResponse,
    type SchoolLunchRetrieveParams as SchoolLunchRetrieveParams,
    type SchoolLunchUpdateParams as SchoolLunchUpdateParams,
    type SchoolLunchDeleteParams as SchoolLunchDeleteParams,
    type SchoolLunchRetrieveSchoolLunchesParams as SchoolLunchRetrieveSchoolLunchesParams,
    type SchoolLunchSchoolLunchesParams as SchoolLunchSchoolLunchesParams,
  };
}
