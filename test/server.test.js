const request = require('supertest');
const app = require('../server'); // Adjust the path if necessary

describe('GET /', () => {
  it('should respond with Hello from <environment> environment!', async () => {

    const environment = process.env.NODE_ENV || 'development';
    const expectedMessage = `Hello from ${environment} environment!`;

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe(expectedMessage);
  });
});