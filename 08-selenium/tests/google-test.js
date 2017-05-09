// tests/google-test.js
const assert = require('assert');

describe('Google page', function() {
    it('should have correct title', function () {
        browser.url('http://www.google.com');

        const actual = browser.getTitle();
        assert.equal(actual, 'Google');
    });
});
