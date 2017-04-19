const getDevDependencies = require('../getDevDependencies');
const assert = require('assert');
const fs = require('fs');

describe('getDevDependencies', () => {
    const path = __dirname + '/package.json';

    before(done => {
        const data = '{"devDependencies": {"mocha": "1.2.3"}}';

        fs.writeFile(path, data, done);
    });

    after(done => {
        fs.unlink(path, done);
    });

    it('should return devDependencies', () => {
        return getDevDependencies(path)
            .then(actual => {
                const expected = { mocha: '1.2.3' };

                assert.deepEqual(actual, expected);
            });
    });
});
