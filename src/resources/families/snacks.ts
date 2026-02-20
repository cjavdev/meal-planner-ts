// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snacks extends APIResource {
  /**
   * Request a snack
   *
   * @example
   * ```ts
   * const snack = await client.families.snacks.create(
   *   'fam_abc123',
   *   {
   *     description: 'Fresh apple slices with peanut butter',
   *     name: 'Apple slices',
   *   },
   * );
   * ```
   */
  create(familyID: string, body: SnackCreateParams, options?: RequestOptions): APIPromise<Snack> {
    return this._client.post(path`/families/${familyID}/snacks`, { body, ...options });
  }

  /**
   * Get a snack by ID
   *
   * @example
   * ```ts
   * const snack = await client.families.snacks.retrieve(
   *   'snk_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  retrieve(snackID: string, params: SnackRetrieveParams, options?: RequestOptions): APIPromise<Snack> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/snacks/${snackID}`, options);
  }

  /**
   * Update a snack
   *
   * @example
   * ```ts
   * const snack = await client.families.snacks.update(
   *   'snk_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  update(snackID: string, params: SnackUpdateParams, options?: RequestOptions): APIPromise<Snack> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/snacks/${snackID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List snacks
   *
   * @example
   * ```ts
   * const snacks = await client.families.snacks.list(
   *   'fam_abc123',
   * );
   * ```
   */
  list(
    familyID: string,
    query: SnackListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnackListResponse> {
    return this._client.get(path`/families/${familyID}/snacks`, { query, ...options });
  }

  /**
   * Delete a snack
   *
   * @example
   * ```ts
   * await client.families.snacks.delete('snk_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(snackID: string, params: SnackDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/snacks/${snackID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Approve a snack request
   *
   * @example
   * ```ts
   * const snack = await client.families.snacks.approve(
   *   'snk_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  approve(snackID: string, params: SnackApproveParams, options?: RequestOptions): APIPromise<Snack> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/snacks/${snackID}/approve`, { body, ...options });
  }

  /**
   * Reject a snack request
   *
   * @example
   * ```ts
   * const snack = await client.families.snacks.reject(
   *   'snk_abc123',
   *   { familyId: 'fam_abc123', reason: 'Too much sugar' },
   * );
   * ```
   */
  reject(snackID: string, params: SnackRejectParams, options?: RequestOptions): APIPromise<Snack> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/snacks/${snackID}/reject`, { body, ...options });
  }
}

export interface Snack {
  id: string;

  createdAt: string;

  description: string;

  familyId: string;

  name: string;

  reason: string | null;

  requestedBy: string;

  reviewedBy: string | null;

  status: 'pending' | 'approved' | 'rejected';

  updatedAt: string;
}

export interface SnackListResponse {
  data: Array<Snack>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface SnackCreateParams {
  description: string;

  name: string;
}

export interface SnackRetrieveParams {
  familyId: string;
}

export interface SnackUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export interface SnackListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface SnackDeleteParams {
  familyId: string;
}

export interface SnackApproveParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  reason?: string;
}

export interface SnackRejectParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  reason: string;
}

export declare namespace Snacks {
  export {
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
}
