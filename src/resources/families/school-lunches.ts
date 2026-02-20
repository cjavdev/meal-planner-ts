// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SchoolLunches extends APIResource {
  /**
   * Get a school lunch by ID
   *
   * @example
   * ```ts
   * const schoolLunch =
   *   await client.families.schoolLunches.retrieve(
   *     'sl_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  retrieve(
    lunchID: string,
    params: SchoolLunchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SchoolLunch> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/school-lunches/${lunchID}`, options);
  }

  /**
   * Update a school lunch
   *
   * @example
   * ```ts
   * const schoolLunch =
   *   await client.families.schoolLunches.update('sl_abc123', {
   *     familyId: 'fam_abc123',
   *   });
   * ```
   */
  update(
    lunchID: string,
    params: SchoolLunchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SchoolLunch> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/school-lunches/${lunchID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a school lunch
   *
   * @example
   * ```ts
   * await client.families.schoolLunches.delete('sl_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(lunchID: string, params: SchoolLunchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/school-lunches/${lunchID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List school lunches
   *
   * @example
   * ```ts
   * const response =
   *   await client.families.schoolLunches.retrieveSchoolLunches(
   *     'fam_abc123',
   *   );
   * ```
   */
  retrieveSchoolLunches(
    familyID: string,
    query: SchoolLunchRetrieveSchoolLunchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SchoolLunchRetrieveSchoolLunchesResponse> {
    return this._client.get(path`/families/${familyID}/school-lunches`, { query, ...options });
  }

  /**
   * Create a school lunch
   *
   * @example
   * ```ts
   * const schoolLunch =
   *   await client.families.schoolLunches.schoolLunches(
   *     'fam_abc123',
   *     {
   *       date: '2026-03-01',
   *       items: ['sandwich', 'apple', 'juice box'],
   *       memberId: 'mem_abc123',
   *     },
   *   );
   * ```
   */
  schoolLunches(
    familyID: string,
    body: SchoolLunchSchoolLunchesParams,
    options?: RequestOptions,
  ): APIPromise<SchoolLunch> {
    return this._client.post(path`/families/${familyID}/school-lunches`, { body, ...options });
  }
}

export interface SchoolLunch {
  id: string;

  createdAt: string;

  date: string;

  familyId: string;

  items: Array<string>;

  memberId: string;

  notes: string;

  updatedAt: string;
}

export interface SchoolLunchRetrieveSchoolLunchesResponse {
  data: Array<SchoolLunch>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface SchoolLunchRetrieveParams {
  familyId: string;
}

export interface SchoolLunchUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  date?: string;

  /**
   * Body param
   */
  items?: Array<string>;

  /**
   * Body param
   */
  memberId?: string;

  /**
   * Body param
   */
  notes?: string;

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export interface SchoolLunchDeleteParams {
  familyId: string;
}

export interface SchoolLunchRetrieveSchoolLunchesParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Filter lunches on or before this date (YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Filter lunches on or after this date (YYYY-MM-DD)
   */
  startDate?: string;
}

export interface SchoolLunchSchoolLunchesParams {
  /**
   * Date in YYYY-MM-DD format
   */
  date: string;

  items: Array<string>;

  memberId: string;

  notes?: string;
}

export declare namespace SchoolLunches {
  export {
    type SchoolLunch as SchoolLunch,
    type SchoolLunchRetrieveSchoolLunchesResponse as SchoolLunchRetrieveSchoolLunchesResponse,
    type SchoolLunchRetrieveParams as SchoolLunchRetrieveParams,
    type SchoolLunchUpdateParams as SchoolLunchUpdateParams,
    type SchoolLunchDeleteParams as SchoolLunchDeleteParams,
    type SchoolLunchRetrieveSchoolLunchesParams as SchoolLunchRetrieveSchoolLunchesParams,
    type SchoolLunchSchoolLunchesParams as SchoolLunchSchoolLunchesParams,
  };
}
