const sinon = require('sinon');
const

describe('Format date', () => {
    let clock;

    before(function () {
        const startDate = new Date(2017, 3, 25).getTime()
        clock = sinon.useFakeTimers(startDate);
    });

    after(() => clock.restore());

    it('should return only time', function () {
        var actual = formatDate(new Date(2017, 3, 25, 6, 17, 6));

        expect(actual).to.equal('06:17');
    });

    it('should return `вчера` with time', function () {
        var actual = formatDate(new Date(2017, 3, 24, 8, 17, 6));

        expect(actual).to.equal('вчера в 08:17');
    });

    it('should return date without year', function () {
        var actual = formatDate(new Date(2017, 3, 23, 8, 17, 6));

        expect(actual).to.equal('23 апреля в 08:17');
    });

    it('should return date with year', function () {
        var actual = formatDate(new Date(2016, 3, 24, 8, 17, 6));

        expect(actual).to.equal('24 апреля 2016 в 08:17');
    });

});
