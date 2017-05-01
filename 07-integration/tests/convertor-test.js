// tests/convertor-test.js

const request = require('supertest');
const app = require('../app');

describe('Convertor controller', () => {
    it('should return result', () => {
        return request(app)
            .get('/convert')
            .query({ value: 1.5, from: 'week', to: 'min' })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect({ result: 15120 });
    });

    it('should throw error', () => {
        return request(app)
            .get('/convert')
            .query({ value: 1.5, from: 'unexpected', to: 'min' })
            .expect(500)
            .expect(/unexpected/);
    });
});
