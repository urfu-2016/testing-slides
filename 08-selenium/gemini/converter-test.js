gemini.suite('Converter', (suite) => {
    suite.setUrl('/convert.html')
        .setCaptureElements('.container')
        .capture('enabled')

        .capture('disabled', (actions, find) => {
            const from = find('#from');
            actions
                .sendKeys(from, gemini.BACK_SPACE)
                .sendKeys(from, 'Invalid value');
        });
});
