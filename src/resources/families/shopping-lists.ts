// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ShoppingLists extends APIResource {
  /**
   * Create a shopping list
   *
   * @example
   * ```ts
   * const shoppingList =
   *   await client.families.shoppingLists.create('fam_abc123', {
   *     name: 'Weekly Groceries',
   *   });
   * ```
   */
  create(
    familyID: string,
    body: ShoppingListCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingList> {
    return this._client.post(path`/families/${familyID}/shopping-lists`, { body, ...options });
  }

  /**
   * Get a shopping list by ID
   *
   * @example
   * ```ts
   * const shoppingList =
   *   await client.families.shoppingLists.retrieve(
   *     'sl_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  retrieve(
    listID: string,
    params: ShoppingListRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingList> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/shopping-lists/${listID}`, options);
  }

  /**
   * Update a shopping list
   *
   * @example
   * ```ts
   * const shoppingList =
   *   await client.families.shoppingLists.update('sl_abc123', {
   *     familyId: 'fam_abc123',
   *   });
   * ```
   */
  update(
    listID: string,
    params: ShoppingListUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingList> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/shopping-lists/${listID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List shopping lists
   *
   * @example
   * ```ts
   * const shoppingLists =
   *   await client.families.shoppingLists.list('fam_abc123');
   * ```
   */
  list(
    familyID: string,
    query: ShoppingListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShoppingListListResponse> {
    return this._client.get(path`/families/${familyID}/shopping-lists`, { query, ...options });
  }

  /**
   * Delete a shopping list
   *
   * @example
   * ```ts
   * await client.families.shoppingLists.delete('sl_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(listID: string, params: ShoppingListDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/shopping-lists/${listID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Mark a shopping list as completed
   *
   * @example
   * ```ts
   * const shoppingList =
   *   await client.families.shoppingLists.complete(
   *     'sl_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  complete(
    listID: string,
    params: ShoppingListCompleteParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingList> {
    const { familyId } = params;
    return this._client.post(path`/families/${familyId}/shopping-lists/${listID}/checkout`, options);
  }

  /**
   * Merge another shopping list into this one
   *
   * @example
   * ```ts
   * const shoppingList =
   *   await client.families.shoppingLists.merge('sl_abc123', {
   *     familyId: 'fam_abc123',
   *     sourceListId: 'sl_source123',
   *   });
   * ```
   */
  merge(listID: string, params: ShoppingListMergeParams, options?: RequestOptions): APIPromise<ShoppingList> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/shopping-lists/${listID}/merge`, {
      body,
      ...options,
    });
  }
}

export interface ShoppingList {
  id: string;

  createdAt: string;

  familyId: string;

  items: Array<ShoppingList.Item>;

  name: string;

  status: 'active' | 'completed';

  updatedAt: string;
}

export namespace ShoppingList {
  export interface Item {
    checked: boolean;

    name: string;

    quantity: number;

    unit: string;
  }
}

export interface ShoppingListListResponse {
  data: Array<ShoppingList>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface ShoppingListCreateParams {
  name: string;

  items?: Array<ShoppingListCreateParams.Item>;
}

export namespace ShoppingListCreateParams {
  export interface Item {
    checked: boolean;

    name: string;

    quantity: number;

    unit: string;
  }
}

export interface ShoppingListRetrieveParams {
  familyId: string;
}

export interface ShoppingListUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  items?: Array<ShoppingListUpdateParams.Item>;

  /**
   * Body param
   */
  name?: string;

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export namespace ShoppingListUpdateParams {
  export interface Item {
    checked: boolean;

    name: string;

    quantity: number;

    unit: string;
  }
}

export interface ShoppingListListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface ShoppingListDeleteParams {
  familyId: string;
}

export interface ShoppingListCompleteParams {
  familyId: string;
}

export interface ShoppingListMergeParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  sourceListId: string;
}

export declare namespace ShoppingLists {
  export {
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
}
