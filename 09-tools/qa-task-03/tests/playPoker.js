const assert = require('assert');
const playPoker = require('../src/playPoker');

describe('playPoker', () => {
    it('should return `Ничья` for equal poker hand', () => {
        const actual = playPoker([1, 1, 2, 3, 4], [1, 1, 2, 3, 5]);

        assert.equal(actual, 'Ничья');
    });

    it('should return `Первый` when first hand great then second', () => {
        const actual = playPoker([1, 1, 1, 1, 4], [1, 1, 1, 3, 4]);

        assert.equal(actual, 'Первый');
    });

    it('should return `Второй` when second hand great then first', () => {
        const actual = playPoker([1, 1, 2, 3, 4], [1, 1, 1, 3, 4]);

        assert.equal(actual, 'Второй');
    });
});
