// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MealPlanner from '@cjavdev/meal-planner';

const client = new MealPlanner({
  familyID: 'My Family ID',
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pantry', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.pantry.create('fam_abc123', {
      category: 'dairy',
      name: 'Milk',
      quantity: 1,
      unit: 'gallon',
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
    const response = await client.families.pantry.create('fam_abc123', {
      category: 'dairy',
      name: 'Milk',
      quantity: 1,
      unit: 'gallon',
      expiresAt: '2026-03-01T00:00:00.000Z',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.pantry.retrieve('pi_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.pantry.retrieve('pi_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.pantry.update('pi_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.pantry.update('pi_abc123', {
      familyId: 'fam_abc123',
      category: 'dairy',
      expiresAt: '2026-03-01T00:00:00.000Z',
      name: 'Milk',
      quantity: 2,
      unit: 'gallon',
      'if-match': 'if-match',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.families.pantry.list('fam_abc123');
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
      client.families.pantry.list(
        'fam_abc123',
        { cursor: 'cursor', limit: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.pantry.delete('pi_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.pantry.delete('pi_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('bulkAdd: only required params', async () => {
    const responsePromise = client.families.pantry.bulkAdd('fam_abc123', {
      items: [
        {
          category: 'dairy',
          name: 'Milk',
          quantity: 1,
          unit: 'gallon',
        },
      ],
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
  test.skip('bulkAdd: required and optional params', async () => {
    const response = await client.families.pantry.bulkAdd('fam_abc123', {
      items: [
        {
          category: 'dairy',
          name: 'Milk',
          quantity: 1,
          unit: 'gallon',
          expiresAt: '2026-03-01T00:00:00.000Z',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('bulkRemove: only required params', async () => {
    const responsePromise = client.families.pantry.bulkRemove('fam_abc123', { ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkRemove: required and optional params', async () => {
    const response = await client.families.pantry.bulkRemove('fam_abc123', { ids: ['string'] });
  });
});
