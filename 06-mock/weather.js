const request = require('request');
const url = 'https://api.weather.yandex.ru/v1/forecast';

function weather(cb) {
    request(url, (requestError, res, body) => {
        if (requestError) {
			return cb(requestError.message);
		}
		
		if (res.statusCode !== 200) {
            return cb('Request failed');
        }

        try {
            const data = JSON.parse(body);
            cb(null, data.fact.temp);
        } catch (parseError) {
            cb(parseError.message);
        }
    });
}

module.exports = weather;
