// tests/google-test.js
const assert = require('assert');

describe('Google page', () => {
    it('should have correct title', () => {
        browser.url('http://www.google.com');

        const actual = browser.getTitle();
        assert.equal(actual, 'Google');
    });
});
