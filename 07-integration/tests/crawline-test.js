// tests/crawline-test.js

const crawline = require('../crawline');
const sinon = require('sinon');
const assert = require('assert');

describe('Crawline', () => {
    let clock

    beforeEach(() => clock = sinon.useFakeTimers());
    afterEach(() => {
        clock.restore();
        process.stdout.write.restore();
    });

    it('shoult ptint text', done => {
        const write = sinon.spy(process.stdout, 'write');

        crawline('I don’t always bend time and ' +
            'space in unit tests, but when I do, ' +
            'I use Buster.JS + Sinon.JS', () => {
                assert.equal(write.callCount, 91);
                done();
            });

        clock.tick(10000);
    });
});
