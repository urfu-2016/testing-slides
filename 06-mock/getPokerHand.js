function getPokerHand(dice) {
    if(!Array.isArray(dice)) {
        throw new Error('Arguments is not array');
    }

    if (dice.length !== 5) {
        throw new Error('Arguments length not equal 5');
    }
}

module.exports = getPokerHand;
