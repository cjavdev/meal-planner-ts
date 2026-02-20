// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AvillaMealPlanner from 'avilla-meal-planner';

const client = new AvillaMealPlanner({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snacks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.snacks.create('fam_abc123', {
      description: 'Fresh apple slices with peanut butter',
      name: 'Apple slices',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.families.snacks.create('fam_abc123', {
      description: 'Fresh apple slices with peanut butter',
      name: 'Apple slices',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.snacks.retrieve('snk_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.families.snacks.retrieve('snk_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.snacks.update('snk_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.families.snacks.update('snk_abc123', {
      familyId: 'fam_abc123',
      description: 'Updated description',
      name: 'Apple slices',
      'if-match': 'if-match',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.families.snacks.list('fam_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.families.snacks.list(
        'fam_abc123',
        { cursor: 'cursor', limit: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AvillaMealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.snacks.delete('snk_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.families.snacks.delete('snk_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.families.snacks.approve('snk_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('approve: required and optional params', async () => {
    const response = await client.families.snacks.approve('snk_abc123', {
      familyId: 'fam_abc123',
      reason: 'Healthy choice!',
    });
  });

  // Mock server tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.families.snacks.reject('snk_abc123', {
      familyId: 'fam_abc123',
      reason: 'Too much sugar',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reject: required and optional params', async () => {
    const response = await client.families.snacks.reject('snk_abc123', {
      familyId: 'fam_abc123',
      reason: 'Too much sugar',
    });
  });
});
