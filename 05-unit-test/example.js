var assert = require('assert');

function getPlural(count, forms) {
    count %= 100;
    if (count > 10 && count < 15)
        return forms[2];

    var residue = count % 10;
    if (residue === 1)
        return forms[0];
    if (residue > 0 && residue < 5)
        return forms[1];

    return forms[2];
}

var forms = ['монета', 'монеты', 'монет'];
assert.equal(getPlural(1, forms), 'монета');
assert.equal(getPlural(2, forms), 'монеты');
assert.equal(getPlural(5, forms), 'монет');
assert.equal(getPlural(11, forms), 'монет');
assert.equal(getPlural(22, forms), 'монеты');
assert.equal(getPlural(113, forms), 'монет');
