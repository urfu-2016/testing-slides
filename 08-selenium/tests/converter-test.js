const assert = require('assert');

describe('Converter page', () => {
    it('should convert value', () => {
        browser.url('https://urfu-2016-convertor.herokuapp.com/convert.html');

        browser.setValue('#value', '1.5');
        browser.setValue('input#from', 'week');
        browser.setValue('#to', 'min');

        browser.click('#send');
        browser.waitForValue('#result');

        const actual = browser.getValue('#result');
        assert.equal(actual, '15120');
    });
});
