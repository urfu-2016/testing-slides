const sinon = require('sinon');
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('Poker', () => {
    afterEach(() => {
        console.log.restore();
        console.error.restore();
    });

    it('should print success result', () => {
        const log = sinon.stub(console, 'log');
        const error = sinon.stub(console, 'error');

        const playPoker = sinon.stub();
        playPoker.withArgs([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]).returns('Ничья');
        const poker = proxyquire('../poker', { './playPoker': playPoker });

        poker([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]);

        assert(log.calledOnce);
        assert(log.calledWith('Ничья'));

        assert(!error.called);
    });

    it('should print error', () => {
        const log = sinon.stub(console, 'log');
        const error = sinon.stub(console, 'error');

        const playPoker = sinon.stub();
        playPoker.throws(new Error('Some error'));
        const poker = proxyquire('../poker', { './playPoker': playPoker });

        poker([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]);

        assert(!log.called);

        assert(error.calledOnce);
        assert(error.calledWith('Some error'));
    });
});
