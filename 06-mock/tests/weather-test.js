const weather = require('../weather');
const nock = require('nock');
const assert = require('assert');

describe('weather', () => {
    afterEach(nock.cleanAll);

    it('should print temperature', done => {
        nock('https://api.weather.yandex.ru')
            .get('/v1/forecast')
            .reply(200, '{"fact":{"temp":25}}');

        weather((error, actual) => {
            assert.equal(actual, 25);
            done(error);
        });
    });

    it('should return error when request failed', done => {
        nock('https://api.weather.yandex.ru')
            .get('/v1/forecast')
            .reply(500, 'Internal server error');

        weather((error, actual) => {
            assert.equal(error, 'Request failed');
            done();
        });
    });
})
