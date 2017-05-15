'use strict';

const assert = require('assert');

/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dice) {
    validateDice(dice);

    const [maxFrequence, secondMaxFrequence] = dice
        .reduce((frequences, value) => {
            frequences[value] = frequences[value] ? frequences[value] + 1 : 1;

            return frequences;
        }, [])
        .sort((first, second) => second - first);

    switch (maxFrequence) {
        case 5:
            return 'Покер';
        case 4:
            return 'Каре';
        case 3:
            return secondMaxFrequence === 2
                ? 'Фулл хаус'
                : 'Тройка';
        case 2:
            return secondMaxFrequence === 2
                ? 'Две пары'
                : 'Пара';
        case 1:
            return 'Наивысшее очко';
    }
}

function validateDice(dice) {
    const isValidArray = Array.isArray(dice) && dice.length === 5;

    assert(isValidArray, `Invalid dice array: ${dice}`);

    const containsOnlyCorrectValues = dice
        .every(isValueCorrect);

    assert(containsOnlyCorrectValues, `Dice array has invalid values`);

}

function isValueCorrect(value) {
    return Number.isInteger(value) && value >= 1 && value <= 6;
}

module.exports = getPokerHand;
