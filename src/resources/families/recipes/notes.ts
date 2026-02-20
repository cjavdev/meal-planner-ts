// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * @example
   * ```ts
   * const recipeNote =
   *   await client.families.recipes.notes.create('rec_abc123', {
   *     familyId: 'fam_abc123',
   *     content: 'Try adding more garlic next time',
   *   });
   * ```
   */
  create(recipeID: string, params: NoteCreateParams, options?: RequestOptions): APIPromise<RecipeNote> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/recipes/${recipeID}/notes`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const recipeNote =
   *   await client.families.recipes.notes.retrieve(
   *     'note_abc123',
   *     { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   *   );
   * ```
   */
  retrieve(noteID: string, params: NoteRetrieveParams, options?: RequestOptions): APIPromise<RecipeNote> {
    const { familyId, recipeId } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeId}/notes/${noteID}`, options);
  }

  /**
   * @example
   * ```ts
   * const notes = await client.families.recipes.notes.list(
   *   'rec_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  list(recipeID: string, params: NoteListParams, options?: RequestOptions): APIPromise<NoteListResponse> {
    const { familyId, ...query } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}/notes`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.notes.delete('note_abc123', {
   *   familyId: 'fam_abc123',
   *   recipeId: 'rec_abc123',
   * });
   * ```
   */
  delete(noteID: string, params: NoteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId, recipeId } = params;
    return this._client.delete(path`/families/${familyId}/recipes/${recipeId}/notes/${noteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RecipeNote {
  id: string;

  authorId: string;

  content: string;

  createdAt: string;

  familyId: string;

  recipeId: string;
}

export interface NoteListResponse {
  data: Array<RecipeNote>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface NoteCreateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  content: string;
}

export interface NoteRetrieveParams {
  familyId: string;

  recipeId: string;
}

export interface NoteListParams {
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

export interface NoteDeleteParams {
  familyId: string;

  recipeId: string;
}

export declare namespace Notes {
  export {
    type RecipeNote as RecipeNote,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteListParams as NoteListParams,
    type NoteDeleteParams as NoteDeleteParams,
  };
}
