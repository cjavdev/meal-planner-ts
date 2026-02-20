// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AvillaMealPlanner } from '../client';

export abstract class APIResource {
  protected _client: AvillaMealPlanner;

  constructor(client: AvillaMealPlanner) {
    this._client = client;
  }
}
