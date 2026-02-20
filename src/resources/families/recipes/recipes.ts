// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttachmentsAPI from './attachments';
import {
  AttachmentCreateParams,
  AttachmentDeleteParams,
  AttachmentListParams,
  AttachmentListResponse,
  AttachmentRetrieveDownloadParams,
  AttachmentRetrieveParams,
  Attachments,
  RecipeAttachment,
} from './attachments';
import * as IngredientsAPI from './ingredients';
import {
  Ingredient,
  IngredientCreateParams,
  IngredientDeleteParams,
  IngredientListParams,
  IngredientListResponse,
  IngredientRetrieveParams,
  IngredientUpdateParams,
  Ingredients,
} from './ingredients';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteDeleteParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  Notes,
  RecipeNote,
} from './notes';
import * as TagsAPI from './tags';
import {
  RecipeTag,
  TagCreateParams,
  TagDeleteParams,
  TagListParams,
  TagListResponse,
  TagRetrieveParams,
  Tags,
} from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Recipes extends APIResource {
  ingredients: IngredientsAPI.Ingredients = new IngredientsAPI.Ingredients(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  attachments: AttachmentsAPI.Attachments = new AttachmentsAPI.Attachments(this._client);

  /**
   * @example
   * ```ts
   * const recipe = await client.families.recipes.create(
   *   'fam_abc123',
   *   {
   *     cookTimeMinutes: 30,
   *     description: 'Classic Italian pasta dish',
   *     instructions: ['Boil water', 'Cook pasta'],
   *     prepTimeMinutes: 15,
   *     servings: 4,
   *     title: 'Spaghetti Bolognese',
   *   },
   * );
   * ```
   */
  create(familyID: string, body: RecipeCreateParams, options?: RequestOptions): APIPromise<Recipe> {
    return this._client.post(path`/families/${familyID}/recipes`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const recipe = await client.families.recipes.retrieve(
   *   'rec_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  retrieve(recipeID: string, params: RecipeRetrieveParams, options?: RequestOptions): APIPromise<Recipe> {
    const { familyId } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}`, options);
  }

  /**
   * @example
   * ```ts
   * const recipe = await client.families.recipes.update(
   *   'rec_abc123',
   *   { familyId: 'fam_abc123' },
   * );
   * ```
   */
  update(recipeID: string, params: RecipeUpdateParams, options?: RequestOptions): APIPromise<Recipe> {
    const { familyId, ...body } = params;
    return this._client.put(path`/families/${familyId}/recipes/${recipeID}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const recipes = await client.families.recipes.list(
   *   'fam_abc123',
   * );
   * ```
   */
  list(
    familyID: string,
    query: RecipeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecipeListResponse> {
    return this._client.get(path`/families/${familyID}/recipes`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.families.recipes.delete('rec_abc123', {
   *   familyId: 'fam_abc123',
   * });
   * ```
   */
  delete(recipeID: string, params: RecipeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { familyId } = params;
    return this._client.delete(path`/families/${familyId}/recipes/${recipeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const response =
   *   await client.families.recipes.retrieveVersions(
   *     'rec_abc123',
   *     { familyId: 'fam_abc123' },
   *   );
   * ```
   */
  retrieveVersions(
    recipeID: string,
    params: RecipeRetrieveVersionsParams,
    options?: RequestOptions,
  ): APIPromise<RecipeRetrieveVersionsResponse> {
    const { familyId, ...query } = params;
    return this._client.get(path`/families/${familyId}/recipes/${recipeID}/versions`, { query, ...options });
  }
}

export interface Recipe {
  id: string;

  cookTimeMinutes: number;

  createdAt: string;

  createdBy: string;

  description: string;

  familyId: string;

  instructions: Array<string>;

  prepTimeMinutes: number;

  servings: number;

  title: string;

  updatedAt: string;
}

export interface RecipeListResponse {
  data: Array<Recipe>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export interface RecipeRetrieveVersionsResponse {
  data: Array<RecipeRetrieveVersionsResponse.Data>;

  has_more: boolean;

  /**
   * Cursor for the next page
   */
  next_cursor: string | null;
}

export namespace RecipeRetrieveVersionsResponse {
  export interface Data {
    id: string;

    changes: string;

    createdAt: string;

    createdBy: string;

    familyId: string;

    recipeId: string;

    snapshot: { [key: string]: unknown };

    version: number;
  }
}

export interface RecipeCreateParams {
  cookTimeMinutes: number;

  description: string;

  instructions: Array<string>;

  prepTimeMinutes: number;

  servings: number;

  title: string;
}

export interface RecipeRetrieveParams {
  familyId: string;
}

export interface RecipeUpdateParams {
  /**
   * Path param
   */
  familyId: string;

  /**
   * Body param
   */
  cookTimeMinutes?: number;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  instructions?: Array<string>;

  /**
   * Body param
   */
  prepTimeMinutes?: number;

  /**
   * Body param
   */
  servings?: number;

  /**
   * Body param
   */
  title?: string;
}

export interface RecipeListParams {
  /**
   * Opaque pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return
   */
  limit?: number;
}

export interface RecipeDeleteParams {
  familyId: string;
}

export interface RecipeRetrieveVersionsParams {
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

Recipes.Ingredients = Ingredients;
Recipes.Tags = Tags;
Recipes.Notes = Notes;
Recipes.Attachments = Attachments;

export declare namespace Recipes {
  export {
    type Recipe as Recipe,
    type RecipeListResponse as RecipeListResponse,
    type RecipeRetrieveVersionsResponse as RecipeRetrieveVersionsResponse,
    type RecipeCreateParams as RecipeCreateParams,
    type RecipeRetrieveParams as RecipeRetrieveParams,
    type RecipeUpdateParams as RecipeUpdateParams,
    type RecipeListParams as RecipeListParams,
    type RecipeDeleteParams as RecipeDeleteParams,
    type RecipeRetrieveVersionsParams as RecipeRetrieveVersionsParams,
  };

  export {
    Ingredients as Ingredients,
    type Ingredient as Ingredient,
    type IngredientListResponse as IngredientListResponse,
    type IngredientCreateParams as IngredientCreateParams,
    type IngredientRetrieveParams as IngredientRetrieveParams,
    type IngredientUpdateParams as IngredientUpdateParams,
    type IngredientListParams as IngredientListParams,
    type IngredientDeleteParams as IngredientDeleteParams,
  };

  export {
    Tags as Tags,
    type RecipeTag as RecipeTag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Notes as Notes,
    type RecipeNote as RecipeNote,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteListParams as NoteListParams,
    type NoteDeleteParams as NoteDeleteParams,
  };

  export {
    Attachments as Attachments,
    type RecipeAttachment as RecipeAttachment,
    type AttachmentListResponse as AttachmentListResponse,
    type AttachmentCreateParams as AttachmentCreateParams,
    type AttachmentRetrieveParams as AttachmentRetrieveParams,
    type AttachmentListParams as AttachmentListParams,
    type AttachmentDeleteParams as AttachmentDeleteParams,
    type AttachmentRetrieveDownloadParams as AttachmentRetrieveDownloadParams,
  };
}
