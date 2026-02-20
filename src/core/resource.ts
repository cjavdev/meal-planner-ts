// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MealPlanner } from '../client';

export abstract class APIResource {
  protected _client: MealPlanner;

  constructor(client: MealPlanner) {
    this._client = client;
  }
}
