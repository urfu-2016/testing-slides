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
        return `вчера в ${time}`;
    }

    var year = date.getFullYear();
    var monthNumber = date.getMonth();
    var dayData = `${day} ${MONTH[monthNumber]}`;

    if (year !== now.getFullYear()) {
        return `${dayData} ${year} года в ${time}`;
    }

    return `${dayData} в ${time}`;
}

module.exports = formatDate;
