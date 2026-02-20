// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MealPlanner from '@cjavdev/meal-planner';

const client = new MealPlanner({
  familyID: 'My Family ID',
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mealPlans', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.mealPlans.create('fam_abc123', {
      endDate: '2026-02-26',
      name: 'Week 1 Plan',
      startDate: '2026-02-20',
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
    const response = await client.families.mealPlans.create('fam_abc123', {
      endDate: '2026-02-26',
      name: 'Week 1 Plan',
      startDate: '2026-02-20',
      meals: [
        {
          day: '2026-02-20',
          mealType: 'dinner',
          recipeId: 'rec_xyz789',
          servings: 4,
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.mealPlans.retrieve('mp_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.mealPlans.retrieve('mp_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.mealPlans.update('mp_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.mealPlans.update('mp_abc123', {
      familyId: 'fam_abc123',
      endDate: '2026-02-26',
      meals: [
        {
          day: '2026-02-20',
          mealType: 'dinner',
          recipeId: 'rec_xyz789',
          servings: 4,
        },
      ],
      name: 'Week 1 Plan (Updated)',
      startDate: '2026-02-20',
      'if-match': 'if-match',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.families.mealPlans.list('fam_abc123');
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
      client.families.mealPlans.list(
        'fam_abc123',
        { cursor: 'cursor', limit: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.mealPlans.delete('mp_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.mealPlans.delete('mp_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('generateShoppingList: only required params', async () => {
    const responsePromise = client.families.mealPlans.generateShoppingList('mp_abc123', {
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
  test.skip('generateShoppingList: required and optional params', async () => {
    const response = await client.families.mealPlans.generateShoppingList('mp_abc123', {
      familyId: 'fam_abc123',
    });
  });

  // Mock server tests are disabled
  test.skip('lock: only required params', async () => {
    const responsePromise = client.families.mealPlans.lock('mp_abc123', { familyId: 'fam_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lock: required and optional params', async () => {
    const response = await client.families.mealPlans.lock('mp_abc123', { familyId: 'fam_abc123' });
  });
});
