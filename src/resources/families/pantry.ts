// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pantry extends APIResource {
  /**
   * Create a pantry item
   *
   * @example
   * ```ts
   * const pantryItem = await client.families.pantry.create(
   *   'fam_abc123',
   *   {
   *     category: 'dairy',
   *     name: 'Milk',
   *     quantity: 1,
   *     unit: 'gallon',
   *   },
   * );
   * ```
   */
  create(familyID: string, body: PantryCreateParams, options?: RequestOptions): APIPromise<PantryItem> {
    return this._client.post(path`/families/${familyID}/pantry`, { body, ...options });
  }

  /**
   * Get a pantry item by ID
   *
   * @example
   * ```ts
   * const pantryItem = await client.families.pantry.retrieve(
   *   'pi_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  retrieve(itemID: string, params: PantryRetrieveParams, options?: RequestOptions): APIPromise<PantryItem> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/pantry/${itemID}`, options);
  }

  /**
   * Update a pantry item
   *
   * @example
   * ```ts
   * const pantryItem = await client.families.pantry.update(
   *   'pi_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  update(itemID: string, params: PantryUpdateParams, options?: RequestOptions): APIPromise<PantryItem> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/pantry/${itemID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List pantry items
   *
   * @example
   * ```ts
   * const pantries = await client.families.pantry.list(
   *   'fam_abc123',
   * );
   * ```
   */
  list(
    familyID: string,
    query: PantryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PantryListResponse> {
    return this._client.get(path`/families/${familyID}/pantry`, { query, ...options });
  }

  /**
   * Delete a pantry item
   *
   * @example
   * ```ts
   * await client.families.pantry.delete('pi_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(itemID: string, params: PantryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/pantry/${itemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bulk add pantry items
   *
   * @example
   * ```ts
   * const response = await client.families.pantry.bulkAdd(
   *   'fam_abc123',
   *   {
   *     items: [
   *       {
   *         category: 'dairy',
   *         name: 'Milk',
   *         quantity: 1,
   *         unit: 'gallon',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  bulkAdd(
    familyID: string,
    body: PantryBulkAddParams,
    options?: RequestOptions,
  ): APIPromise<PantryBulkAddResponse> {
    return this._client.post(path`/families/${familyID}/pantry/bulk-add`, { body, ...options });
  }

  /**
   * Bulk remove pantry items
   *
   * @example
   * ```ts
   * const response = await client.families.pantry.bulkRemove(
   *   'fam_abc123',
   *   { ids: ['string'] },
   * );
   * ```
   */
  bulkRemove(
    familyID: string,
    body: PantryBulkRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PantryBulkRemoveResponse> {
    return this._client.post(path`/families/${familyID}/pantry/bulk-remove`, { body, ...options });
  }
}

export interface PantryItem {
  id: string;

  category: string;

  createdAt: string;

  expiresAt: string | null;

  familyId: string;

  name: string;

  quantity: number;

  unit: string;

  updatedAt: string;
}

export interface PantryListResponse {
  data: Array<PantryItem>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface PantryBulkAddResponse {
  data: Array<PantryItem>;
}

export interface PantryBulkRemoveResponse {
  /**
   * Number of items deleted
   */
  deleted: number;
}

export interface PantryCreateParams {
  category: string;

  name: string;

  quantity: number;

  unit: string;

  expiresAt?: string | null;
}

export interface PantryRetrieveParams {
  familyId: string;
}

export interface PantryUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  category?: string;

  /**
   * Body param
   */
  expiresAt?: string | null;

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

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export interface PantryListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface PantryDeleteParams {
  familyId: string;
}

export interface PantryBulkAddParams {
  /**
   * Array of pantry items to add
   */
  items: Array<PantryBulkAddParams.Item>;
}

export namespace PantryBulkAddParams {
  export interface Item {
    category: string;

    name: string;

    quantity: number;

    unit: string;

    expiresAt?: string | null;
  }
}

export interface PantryBulkRemoveParams {
  /**
   * Array of pantry item IDs to remove
   */
  ids: Array<string>;
}

export declare namespace Pantry {
  export {
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
}
