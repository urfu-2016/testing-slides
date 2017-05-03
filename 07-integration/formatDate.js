const DAY_IN_MS = 1000 * 60 * 60 * 24;
const MONTH = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

function formatDate(date) {
    if (!date || !Date.parse(date)) {
        throw new Error('`date` is not valid');
    }

    date = new Date(date);
    var now = new Date();

    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var time = `в ${hours}:${minutes}`;
    var day = date.getDate();
    var dayDelta = Math.abs(day - now.getDate());
    var msDelta = Math.abs(date.getTime() - now.getTime());

    if (dayDelta === 0 && msDelta < DAY_IN_MS) {
        return time;
    }

    if (dayDelta === 1 && msDelta < 2 * DAY_IN_MS) {
        return `вчера ${time}`;
    }

    var year = date.getFullYear();
    var monthNumber = date.getMonth();
    var dayData = `${day} ${MONTH[monthNumber]}`;

    if (year !== now.getFullYear()) {
        return `${dayData} ${year} ${time}`;
    }

    return `${dayData} ${time}`;
}

module.exports = formatDate;
