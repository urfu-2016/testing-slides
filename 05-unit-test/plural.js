function getPlural(count, forms) {
    count %= 100;
    if (count > 10 && count < 15)
        return forms[2];

    const residue = count % 10;
    if (residue === 1)
        return forms[0];
    if (residue > 0 && residue < 5)
        return forms[1];

    return forms[2];
}

module.exports = getPlural;
