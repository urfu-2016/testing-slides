const sinon = require('sinon');
const formatDate = require('../formatDate');
const assert = require('assert');

describe('Format date', () => {
    let clock;

    before(function () {
        const startDate = new Date(2017, 3, 25).getTime()
        clock = sinon.useFakeTimers(startDate);
    });

    after(() => clock.restore());

    it('should return only time', function () {
        var actual = formatDate(new Date(2017, 3, 25, 6, 17, 6));

        assert.equal(actual, 'в 06:17');
    });

    it('should return `вчера` with time', function () {
        var actual = formatDate(new Date(2017, 3, 24, 8, 17, 6));

        assert.equal(actual, 'вчера в 08:17');
    });

    it('should return date without year', function () {
        var actual = formatDate(new Date(2017, 3, 23, 8, 17, 6));

        assert.equal(actual, '23 апреля в 08:17');
    });

    it('should return date with year', function () {
        var actual = formatDate(new Date(2016, 3, 24, 8, 17, 6));

        assert.equal(actual, '24 апреля 2016 в 08:17');
    });
});
