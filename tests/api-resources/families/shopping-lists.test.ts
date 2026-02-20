// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AvillaMealPlanner from 'avilla-meal-planner';

const client = new AvillaMealPlanner({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shoppingLists', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.shoppingLists.create('fam_abc123', { name: 'Weekly Groceries' });
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
    const response = await client.families.shoppingLists.create('fam_abc123', {
      name: 'Weekly Groceries',
      items: [
        {
          checked: false,
          name: 'Chicken breast',
          quantity: 2,
          unit: 'lbs',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.shoppingLists.retrieve('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.shoppingLists.retrieve('sl_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.shoppingLists.update('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.shoppingLists.update('sl_abc123', {
      familyId: 'fam_abc123',
      items: [
        {
          checked: false,
          name: 'Chicken breast',
          quantity: 2,
          unit: 'lbs',
        },
      ],
      name: 'Weekly Groceries (Updated)',
      'if-match': 'if-match',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.families.shoppingLists.list('fam_abc123');
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
      client.families.shoppingLists.list(
        'fam_abc123',
        { cursor: 'cursor', limit: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AvillaMealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.shoppingLists.delete('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.shoppingLists.delete('sl_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.families.shoppingLists.complete('sl_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('complete: required and optional params', async () => {
    const response = await client.families.shoppingLists.complete('sl_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('merge: only required params', async () => {
    const responsePromise = client.families.shoppingLists.merge('sl_abc123', {
      familyId: 'fam_abc123',
      sourceListId: 'sl_source123',
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
  test.skip('merge: required and optional params', async () => {
    const response = await client.families.shoppingLists.merge('sl_abc123', {
      familyId: 'fam_abc123',
      sourceListId: 'sl_source123',
    });
  });
});
