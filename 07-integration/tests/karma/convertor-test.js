describe('Convertor', function () {
    beforeEach(function() {
        var fixture = `<div id="fixture">
            <div class="container">
                <input id="value" type="text" name="value" oninput="change()" value="1"> from
                <input id="from" type="text" name="from" oninput="change()" value="m"> to
                <input id="to" type="text" name="to" oninput="change()" value="mm">
                <input id="send" type="button" name="send" onclick="convert()" value="=">
                <input id="result" type="text" name="result">
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('should enable `convert` button for correct value', function() {
        const send = document.getElementById('send');

        chai.assert.equal(send.getAttribute('disabled'), null);
    });

    it('should disable `convert` button for invalid value', function() {
        const from = document.getElementById('from');
        const send = document.getElementById('send');

        from.value = 'invalid unit';
        from.dispatchEvent(new Event('input'));

        chai.assert.equal(send.getAttribute('disabled'), 'disabled');
    });
});
