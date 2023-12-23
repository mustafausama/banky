const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Express app listens', () => {
  it('should respond with success status', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('API is running!');
  });
});
