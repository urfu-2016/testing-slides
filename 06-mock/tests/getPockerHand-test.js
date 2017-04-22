const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should throw error when dice is not array', () => {
        const cb = () => getPokerHand('not array');

        assert.throws(cb, /Arguments is not array/);
    });

    it('should throw error when dice length great 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 4, 5, 6]);

        assert.throws(cb, /Arguments length not equal 5/);
    });

    it('should throw error when dice length less 5', () => {
        const cb = () => getPokerHand([1, 2, 3, 4]);

        assert.throws(cb, /Arguments length not equal 5/);
    });
});
