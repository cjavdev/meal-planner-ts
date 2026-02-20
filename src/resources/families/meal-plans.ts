// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MealPlans extends APIResource {
  /**
   * Create a meal plan
   *
   * @example
   * ```ts
   * const mealPlan = await client.families.mealPlans.create(
   *   'fam_abc123',
   *   {
   *     endDate: '2026-02-26',
   *     name: 'Week 1 Plan',
   *     startDate: '2026-02-20',
   *   },
   * );
   * ```
   */
  create(familyID: string, body: MealPlanCreateParams, options?: RequestOptions): APIPromise<MealPlan> {
    return this._client.post(path`/families/${familyID}/meal-plans`, { body, ...options });
  }

  /**
   * Get a meal plan by ID
   *
   * @example
   * ```ts
   * const mealPlan = await client.families.mealPlans.retrieve(
   *   'mp_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  retrieve(planID: string, params: MealPlanRetrieveParams, options?: RequestOptions): APIPromise<MealPlan> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/meal-plans/${planID}`, options);
  }

  /**
   * Update a meal plan
   *
   * @example
   * ```ts
   * const mealPlan = await client.families.mealPlans.update(
   *   'mp_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  update(planID: string, params: MealPlanUpdateParams, options?: RequestOptions): APIPromise<MealPlan> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/meal-plans/${planID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List meal plans
   *
   * @example
   * ```ts
   * const mealPlans = await client.families.mealPlans.list(
   *   'fam_abc123',
   * );
   * ```
   */
  list(
    familyID: string,
    query: MealPlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MealPlanListResponse> {
    return this._client.get(path`/families/${familyID}/meal-plans`, { query, ...options });
  }

  /**
   * Delete a meal plan
   *
   * @example
   * ```ts
   * await client.families.mealPlans.delete('mp_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(planID: string, params: MealPlanDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/meal-plans/${planID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a shopping list from a meal plan
   *
   * @example
   * ```ts
   * const response =
   *   await client.families.mealPlans.generateShoppingList(
   *     'mp_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  generateShoppingList(
    planID: string,
    params: MealPlanGenerateShoppingListParams,
    options?: RequestOptions,
  ): APIPromise<MealPlanGenerateShoppingListResponse> {
    const { familyId } = params;
    return this._client.post(
      path`/families/${familyId}/meal-plans/${planID}/generate-shopping-list`,
      options,
    );
  }

  /**
   * Lock a meal plan to prevent edits
   *
   * @example
   * ```ts
   * const mealPlan = await client.families.mealPlans.lock(
   *   'mp_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  lock(planID: string, params: MealPlanLockParams, options?: RequestOptions): APIPromise<MealPlan> {
    const { familyId } = params;
    return this._client.post(path`/families/${familyId}/meal-plans/${planID}/lock`, options);
  }
}

export interface MealPlan {
  id: string;

  createdAt: string;

  endDate: string;

  familyId: string;

  locked: boolean;

  meals: Array<MealPlan.Meal>;

  name: string;

  startDate: string;

  updatedAt: string;
}

export namespace MealPlan {
  export interface Meal {
    day: string;

    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';

    recipeId: string;

    servings: number;
  }
}

export interface MealPlanListResponse {
  data: Array<MealPlan>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface MealPlanGenerateShoppingListResponse {
  shoppingListId: string;
}

export interface MealPlanCreateParams {
  endDate: string;

  name: string;

  startDate: string;

  meals?: Array<MealPlanCreateParams.Meal>;
}

export namespace MealPlanCreateParams {
  export interface Meal {
    day: string;

    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';

    recipeId: string;

    servings: number;
  }
}

export interface MealPlanRetrieveParams {
  familyId: string;
}

export interface MealPlanUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  endDate?: string;

  /**
   * Body param
   */
  meals?: Array<MealPlanUpdateParams.Meal>;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  startDate?: string;

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export namespace MealPlanUpdateParams {
  export interface Meal {
    day: string;

    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';

    recipeId: string;

    servings: number;
  }
}

export interface MealPlanListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface MealPlanDeleteParams {
  familyId: string;
}

export interface MealPlanGenerateShoppingListParams {
  familyId: string;
}

export interface MealPlanLockParams {
  familyId: string;
}

export declare namespace MealPlans {
  export {
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
}
