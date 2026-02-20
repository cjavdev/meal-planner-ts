// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * @example
   * ```ts
   * const recipeTag = await client.families.recipes.tags.create(
   *   'rec_abc123',
   *   { familyId: 'fam_abc123', name: 'vegetarian' },
   * );
   * ```
   */
  create(recipeID: string, params: TagCreateParams, options?: RequestOptions): APIPromise<RecipeTag> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/recipes/${recipeID}/tags`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const recipeTag =
   *   await client.families.recipes.tags.retrieve(
   *     'tag_abc123',
   *     { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   *   );
   * ```
   */
  retrieve(tagID: string, params: TagRetrieveParams, options?: RequestOptions): APIPromise<RecipeTag> {
    const { familyId, recipeId } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeId}/tags/${tagID}`, options);
  }

  /**
   * @example
   * ```ts
   * const tags = await client.families.recipes.tags.list(
   *   'rec_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  list(recipeID: string, params: TagListParams, options?: RequestOptions): APIPromise<TagListResponse> {
    const { familyId, ...query } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}/tags`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.tags.delete('tag_abc123', {
   *   familyId: 'fam_abc123',
   *   recipeId: 'rec_abc123',
   * });
   * ```
   */
  delete(tagID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId, recipeId } = params;
    return this._client.delete(path`/families/${familyId}/recipes/${recipeId}/tags/${tagID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RecipeTag {
  id: string;

  familyId: string;

  name: string;

  recipeId: string;
}

export interface TagListResponse {
  data: Array<RecipeTag>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface TagCreateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  name: string;
}

export interface TagRetrieveParams {
  familyId: string;

  recipeId: string;
}

export interface TagListParams {
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

export interface TagDeleteParams {
  familyId: string;

  recipeId: string;
}

export declare namespace Tags {
  export {
    type RecipeTag as RecipeTag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
