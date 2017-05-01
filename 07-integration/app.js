const express = require('express');
const svgCaptcha = require('svg-captcha');
const convert = require('convert-units')
const app = express();

app.set('views', './views');
app.set('view engine', 'hbs');;

app.get('/', (req, res) => {
    const captcha = svgCaptcha.createMathExpr({ color: true });

    res.render('index', captcha);
});

app.get('/convert', (req, res) => {
    const query = req.query;
    const result = convert(query.value)
        .from(query.from)
        .to(query.to);
    res.json({ result });
});

module.exports = app;
