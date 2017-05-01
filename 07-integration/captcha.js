const express = require('express');
const svgCaptcha = require('svg-captcha');
const app = express();

app.set('views', './views');
app.set('view engine', 'hbs');;

app.get('/', function (req, res) {
    const captcha = svgCaptcha.createMathExpr({ color: true });

    //res.set('Content-Type', 'image/svg+xml');
    //res.status(200).send(captcha.data);
    res.render('index', captcha);
});

app.listen(3000);
