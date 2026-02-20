// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AvillaMealPlanner from 'avilla-meal-planner';

const client = new AvillaMealPlanner({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recipes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.recipes.create('fam_abc123', {
      cookTimeMinutes: 30,
      description: 'Classic Italian pasta dish',
      instructions: ['Boil water', 'Cook pasta'],
      prepTimeMinutes: 15,
      servings: 4,
      title: 'Spaghetti Bolognese',
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
    const response = await client.families.recipes.create('fam_abc123', {
      cookTimeMinutes: 30,
      description: 'Classic Italian pasta dish',
      instructions: ['Boil water', 'Cook pasta'],
      prepTimeMinutes: 15,
      servings: 4,
      title: 'Spaghetti Bolognese',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.recipes.retrieve('rec_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.recipes.retrieve('rec_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.recipes.update('rec_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.recipes.update('rec_abc123', {
      familyId: 'fam_abc123',
      cookTimeMinutes: 45,
      description: 'Updated description',
      instructions: ['Step 1', 'Step 2'],
      prepTimeMinutes: 20,
      servings: 6,
      title: 'Spaghetti Bolognese (Updated)',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.families.recipes.list('fam_abc123');
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
      client.families.recipes.list(
        'fam_abc123',
        { cursor: 'cursor', limit: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AvillaMealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.recipes.delete('rec_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.recipes.delete('rec_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('retrieveVersions: only required params', async () => {
    const responsePromise = client.families.recipes.retrieveVersions('rec_abc123', {
      familyId: 'fam_abc123',
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
  test.skip('retrieveVersions: required and optional params', async () => {
    const response = await client.families.recipes.retrieveVersions('rec_abc123', {
      familyId: 'fam_abc123',
      cursor: 'cursor',
      limit: 20,
    });
  });
});
