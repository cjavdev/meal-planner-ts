// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AvillaMealPlanner from 'avilla-meal-planner';

const client = new AvillaMealPlanner({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schoolLunches', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.families.schoolLunches.retrieve('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.schoolLunches.retrieve('sl_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.families.schoolLunches.update('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.schoolLunches.update('sl_abc123', {
      familyId: 'fam_abc123',
      date: '2026-03-01',
      items: ['sandwich', 'apple'],
      memberId: 'mem_abc123',
      notes: 'Updated notes',
      'if-match': 'if-match',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.families.schoolLunches.delete('sl_abc123', { familyId: 'fam_abc123' });
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
    const response = await client.families.schoolLunches.delete('sl_abc123', { familyId: 'fam_abc123' });
  });

  // Mock server tests are disabled
  test.skip('retrieveSchoolLunches', async () => {
    const responsePromise = client.families.schoolLunches.retrieveSchoolLunches('fam_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSchoolLunches: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.families.schoolLunches.retrieveSchoolLunches(
        'fam_abc123',
        {
          cursor: 'cursor',
          endDate: '2026-03-31',
          limit: 20,
          startDate: '2026-03-01',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AvillaMealPlanner.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('schoolLunches: only required params', async () => {
    const responsePromise = client.families.schoolLunches.schoolLunches('fam_abc123', {
      date: '2026-03-01',
      items: ['sandwich', 'apple', 'juice box'],
      memberId: 'mem_abc123',
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
  test.skip('schoolLunches: required and optional params', async () => {
    const response = await client.families.schoolLunches.schoolLunches('fam_abc123', {
      date: '2026-03-01',
      items: ['sandwich', 'apple', 'juice box'],
      memberId: 'mem_abc123',
      notes: 'No nuts, allergy',
    });
  });
});
