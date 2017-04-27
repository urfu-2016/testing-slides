const proxyquire = require('proxyquire');
const sinon = require('sinon');
const assert = require('assert');

describe('playPoker', () => {
    it('should return `Ничья` for equal poker hand', () => {
        const getPokerHand = sinon.stub();
        getPokerHand.withArgs([1, 1, 2, 3, 4]).returns('Пара');
        getPokerHand.withArgs([1, 1, 2, 3, 5]).returns('Пара');
        getPokerHand.throws('Illegal arguments');

        const playPoker = proxyquire('../playPoker', {
            './getPokerHand': getPokerHand
        });
        const actual = playPoker([1, 1, 2, 3, 4], [1, 1, 2, 3, 5]);

        assert.equal(actual, 'Ничья');
    });

    it('should return `Первый` when first hand great then second', () => {
        const getPokerHand = sinon.stub();
        getPokerHand.withArgs([1, 1, 1, 1, 4]).returns('Каре');
        getPokerHand.withArgs([1, 1, 1, 3, 4]).returns('Тройка');
        getPokerHand.throws('Illegal arguments');

        const playPoker = proxyquire('../playPoker', {
            './getPokerHand': getPokerHand
        });
        const actual = playPoker([1, 1, 1, 1, 4], [1, 1, 1, 3, 4]);

        assert.equal(actual, 'Первый');
    });

    it('should return `Второй` when second hand great then first', () => {
        const getPokerHand = sinon.stub();
        getPokerHand.withArgs([1, 1, 2, 3, 4]).returns('Пара');
        getPokerHand.withArgs([1, 1, 1, 3, 4]).returns('Тройка');
        getPokerHand.throws('Illegal arguments');

        const playPoker = proxyquire('../playPoker', {
            './getPokerHand': getPokerHand
        });
        const actual = playPoker([1, 1, 2, 3, 4], [1, 1, 1, 3, 4]);

        assert.equal(actual, 'Второй');
    });
});
