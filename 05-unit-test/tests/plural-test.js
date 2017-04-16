// tests/plural-test.js
const getPlural = require('../plural.js')
const assert = require('assert');

describe('getPlural', () => {
    const forms = ['монета', 'монеты', 'монет'];

    it('should throw error when count is not a numbner', () => {
        try {
            getPlural('NaN', forms);
            throw new Error('`getPlural` should throw error')
        } catch (error) {
            assert.equal(error.message, 'Count is not a number');
        }
    });

    it('should throw error when count is not a numbner', () => {
        const cb = () => getPlural('NaN', forms);

        assert.throws(cb, /Count is not a number/);
    });

    it('should return `монета` for `1`', () => {
        const actual = getPlural(1, forms);

        assert.equal(actual, 'монета');
    });

    it('should return `монеты` for `2`', () => {
        const actual = getPlural(2, forms);

        assert.equal(actual, 'монеты');
    });

    it('should return `монет` for `5`', () => {
        const actual = getPlural(5, forms);

        assert.equal(actual, 'монет');
    });

    it('should return `монет` for `11`', () => {
        const actual = getPlural(11, forms);

        assert.equal(actual, 'монет');
    });

    it('should return `монеты` for `22`', () => {
        const actual = getPlural(22, forms);

        assert.equal(actual, 'монеты');
    });

    it('should return `монет` for `113`', () => {
        const actual = getPlural(113, forms);

        assert.equal(actual, 'монет');
    });
});
