// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MealPlanner from '@cjavdev/meal-planner';

const client = new MealPlanner({
  familyID: 'My Family ID',
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attachments', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.families.recipes.attachments.create('rec_abc123', {
      familyId: 'fam_abc123',
      contentType: 'image/jpeg',
      data: 'aGVsbG8=',
      filename: 'photo.jpg',
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
    const response = await client.families.recipes.attachments.create('rec_abc123', {
      familyId: 'fam_abc123',
      contentType: 'image/jpeg',
      data: 'aGVsbG8=',
      filename: 'photo.jpg',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.recipes.attachments.retrieve('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.families.recipes.attachments.retrieve('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.families.recipes.attachments.list('rec_abc123', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.families.recipes.attachments.list('rec_abc123', {
      familyId: 'fam_abc123',
      cursor: 'cursor',
      limit: 20,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.recipes.attachments.delete('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.families.recipes.attachments.delete('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveDownload: only required params', async () => {
    const responsePromise = client.families.recipes.attachments.retrieveDownload('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
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
  test.skip('retrieveDownload: required and optional params', async () => {
    const response = await client.families.recipes.attachments.retrieveDownload('att_abc123', {
      familyId: 'fam_abc123',
      recipeId: 'rec_abc123',
    });
  });
});
