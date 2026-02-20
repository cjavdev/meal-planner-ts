// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Create a member
   *
   * @example
   * ```ts
   * const member = await client.families.members.create(
   *   'fam_abc123',
   *   {
   *     email: 'jane@example.com',
   *     name: 'Jane Smith',
   *     role: 'parent',
   *   },
   * );
   * ```
   */
  create(familyID: string, body: MemberCreateParams, options?: RequestOptions): APIPromise<Member> {
    return this._client.post(path`/families/${familyID}/members`, { body, ...options });
  }

  /**
   * Get a member by ID
   *
   * @example
   * ```ts
   * const member = await client.families.members.retrieve(
   *   'mem_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  retrieve(memberID: string, params: MemberRetrieveParams, options?: RequestOptions): APIPromise<Member> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/members/${memberID}`, options);
  }

  /**
   * Update a member
   *
   * @example
   * ```ts
   * const member = await client.families.members.update(
   *   'mem_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  update(memberID: string, params: MemberUpdateParams, options?: RequestOptions): APIPromise<Member> {
    const { familyId, 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/families/${familyId}/members/${memberID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List members of a family
   *
   * @example
   * ```ts
   * const members = await client.families.members.list(
   *   'fam_abc123',
   * );
   * ```
   */
  list(
    familyID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(path`/families/${familyID}/members`, { query, ...options });
  }

  /**
   * Delete a member
   *
   * @example
   * ```ts
   * await client.families.members.delete('mem_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(memberID: string, params: MemberDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/members/${memberID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Member {
  id: string;

  createdAt: string;

  email: string;

  familyId: string;

  name: string;

  role: 'admin' | 'parent' | 'child';

  updatedAt: string;
}

export interface MemberListResponse {
  data: Array<Member>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface MemberCreateParams {
  email: string;

  name: string;

  role: 'admin' | 'parent' | 'child';
}

export interface MemberRetrieveParams {
  familyId: string;
}

export interface MemberUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  email?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  role?: 'admin' | 'parent' | 'child';

  /**
   * Header param: ETag for concurrency control
   */
  'if-match'?: string;
}

export interface MemberListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface MemberDeleteParams {
  familyId: string;
}

export declare namespace Members {
  export {
    type Member as Member,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
  };
}
