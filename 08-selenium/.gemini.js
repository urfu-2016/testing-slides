module.exports = {
    rootUrl: 'https://urfu-2016-convertor.herokuapp.com',
    gridUrl: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:80/wd/hub`,

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
