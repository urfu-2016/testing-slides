const getDevDependencies = require('../getDevDependencies');
const assert = require('assert');

describe('getDevDependencies', () => {
    it('should return devDependencies', done => {
        const path = __dirname + '/../package.json';

        getDevDependencies(path)
            .then(actual => {
                const expected = { mocha: '3.2.0' };

                assert.deepEqual(actual, expected);
                done();
            })
            .catch(error => done(error));
    });

    it('should return devDependencies', () => {
        const path = __dirname + '/../package.json';

        return getDevDependencies(path)
            .then(actual => {
                const expected = { mocha: '3.2.0' };

                assert.deepEqual(actual, expected);
            });
    });
});
