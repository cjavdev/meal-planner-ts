// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ingredients extends APIResource {
  /**
   * @example
   * ```ts
   * const ingredient =
   *   await client.families.recipes.ingredients.create(
   *     'rec_abc123',
   *     {
   *       familyId: 'fam_abc123',
   *       name: 'Pasta',
   *       quantity: 500,
   *       unit: 'g',
   *     },
   *   );
   * ```
   */
  create(recipeID: string, params: IngredientCreateParams, options?: RequestOptions): APIPromise<Ingredient> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/recipes/${recipeID}/ingredients`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * const ingredient =
   *   await client.families.recipes.ingredients.retrieve(
   *     'ing_abc123',
   *     { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   *   );
   * ```
   */
  retrieve(
    ingredientID: string,
    params: IngredientRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Ingredient> {
    const { familyId, recipeId } = params;
    return this._client.get(
      path`/families/${familyId}/recipes/${recipeId}/ingredients/${ingredientID}`,
      options,
    );
  }

  /**
   * @example
   * ```ts
   * const ingredient =
   *   await client.families.recipes.ingredients.update(
   *     'ing_abc123',
   *     { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   *   );
   * ```
   */
  update(
    ingredientID: string,
    params: IngredientUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Ingredient> {
    const { familyId, recipeId, ...body } = params;
    return this._client.put(path`/families/${familyId}/recipes/${recipeId}/ingredients/${ingredientID}`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * const ingredients =
   *   await client.families.recipes.ingredients.list(
   *     'rec_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  list(
    recipeID: string,
    params: IngredientListParams,
    options?: RequestOptions,
  ): APIPromise<IngredientListResponse> {
    const { familyId, ...query } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}/ingredients`, {
      query,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.ingredients.delete(
   *   'ing_abc123',
   *   { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   * );
   * ```
   */
  delete(ingredientID: string, params: IngredientDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId, recipeId } = params;
    return this._client.delete(path`/families/${familyId}/recipes/${recipeId}/ingredients/${ingredientID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Ingredient {
  id: string;

  familyId: string;

  name: string;

  quantity: number;

  recipeId: string;

  unit: string;
}

export interface IngredientListResponse {
  data: Array<Ingredient>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface IngredientCreateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  quantity: number;

  /**
   * Body param
   */
  unit: string;
}

export interface IngredientRetrieveParams {
  familyId: string;

  recipeId: string;
}

export interface IngredientUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Path param
   */
  recipeId: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  quantity?: number;

  /**
   * Body param
   */
  unit?: string;
}

export interface IngredientListParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Query param: Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Query param: Number of items to return
   */
  limit?: number;
}

export interface IngredientDeleteParams {
  familyId: string;

  recipeId: string;
}

export declare namespace Ingredients {
  export {
    type Ingredient as Ingredient,
    type IngredientListResponse as IngredientListResponse,
    type IngredientCreateParams as IngredientCreateParams,
    type IngredientRetrieveParams as IngredientRetrieveParams,
    type IngredientUpdateParams as IngredientUpdateParams,
    type IngredientListParams as IngredientListParams,
    type IngredientDeleteParams as IngredientDeleteParams,
  };
}
