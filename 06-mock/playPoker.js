const getPokerHand = require('./getPokerHand');
const pokerHands = [
    'Наивысшее очко',
    'Пара',
    'Две пары',
    'Тройка',
    'Фулл хаус',
    'Каре',
    'Покер'
]

function playPoker(firstDice, secondDice) {
    const first = getPokerHand(firstDice);
    const second = getPokerHand(secondDice);

    const compareHands =
        pokerHands.indexOf(first) -
        pokerHands.indexOf(second);

    return compareHands === 0
        ? 'Ничья'
        : compareHands > 0 ? 'Первый' : 'Второй';
}

module.exports = playPoker;
