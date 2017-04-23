const playPoker = require('./playPoker');

function poker(firstDice, secondDice) {
    try {
        const result = playPoker(firstDice, secondDice);

        console.log(result);
    } catch(error) {
        console.error(error.message);
    }
}

module.exports = poker;
