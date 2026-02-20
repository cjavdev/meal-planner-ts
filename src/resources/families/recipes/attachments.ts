// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attachments extends APIResource {
  /**
   * @example
   * ```ts
   * const recipeAttachment =
   *   await client.families.recipes.attachments.create(
   *     'rec_abc123',
   *     {
   *       familyId: 'fam_abc123',
   *       contentType: 'image/jpeg',
   *       data: 'aGVsbG8=',
   *       filename: 'photo.jpg',
   *     },
   *   );
   * ```
   */
  create(
    recipeID: string,
    params: AttachmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<RecipeAttachment> {
    const { familyId, ...body } = params;
    return this._client.post(path`/families/${familyId}/recipes/${recipeID}/attachments`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * const recipeAttachment =
   *   await client.families.recipes.attachments.retrieve(
   *     'att_abc123',
   *     { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   *   );
   * ```
   */
  retrieve(
    attachmentID: string,
    params: AttachmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RecipeAttachment> {
    const { familyId, recipeId } = params;
    return this._client.get(
      path`/families/${familyId}/recipes/${recipeId}/attachments/${attachmentID}`,
      options,
    );
  }

  /**
   * @example
   * ```ts
   * const attachments =
   *   await client.families.recipes.attachments.list(
   *     'rec_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  list(
    recipeID: string,
    params: AttachmentListParams,
    options?: RequestOptions,
  ): APIPromise<AttachmentListResponse> {
    const { familyId, ...query } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}/attachments`, {
      query,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.attachments.delete(
   *   'att_abc123',
   *   { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   * );
   * ```
   */
  delete(attachmentID: string, params: AttachmentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId, recipeId } = params;
    return this._client.delete(path`/families/${familyId}/recipes/${recipeId}/attachments/${attachmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.attachments.retrieveDownload(
   *   'att_abc123',
   *   { familyId: 'fam_abc123', recipeId: 'rec_abc123' },
   * );
   * ```
   */
  retrieveDownload(
    attachmentID: string,
    params: AttachmentRetrieveDownloadParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { familyId, recipeId } = params;
    return this._client.get(
      path`/families/${familyId}/recipes/${recipeId}/attachments/${attachmentID}/download`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface RecipeAttachment {
  id: string;

  contentType: string;

  createdAt: string;

  familyId: string;

  filename: string;

  recipeId: string;

  size: number;
}

export interface AttachmentListResponse {
  data: Array<RecipeAttachment>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface AttachmentCreateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  contentType: string;

  /**
   * Body param: Base64-encoded file data
   */
  data: string;

  /**
   * Body param
   */
  filename: string;
}

export interface AttachmentRetrieveParams {
  familyId: string;

  recipeId: string;
}

export interface AttachmentListParams {
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

export interface AttachmentDeleteParams {
  familyId: string;

  recipeId: string;
}

export interface AttachmentRetrieveDownloadParams {
  familyId: string;

  recipeId: string;
}

export declare namespace Attachments {
  export {
    type RecipeAttachment as RecipeAttachment,
    type AttachmentListResponse as AttachmentListResponse,
    type AttachmentCreateParams as AttachmentCreateParams,
    type AttachmentRetrieveParams as AttachmentRetrieveParams,
    type AttachmentListParams as AttachmentListParams,
    type AttachmentDeleteParams as AttachmentDeleteParams,
    type AttachmentRetrieveDownloadParams as AttachmentRetrieveDownloadParams,
  };
}
