import { NextApiRequest, NextApiResponse } from 'next';
import handler from './recipes';
import fetchMock from 'jest-fetch-mock';


beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('/api/recipes api', () => {
  it('proxies to 3rd party provider', async () => {
    const req = {} as NextApiRequest;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;
    await handler(req,res)
    expect(fetchMock).toHaveBeenCalledWith('https://dummyjson.com/recipes');

  });
});