describe('Convertor controls', () => {
    it('should enable `convert` button for correct value', () => {
        const send = document.getElementById('send');

        chai.assert.equal(send.getAttribute('disabled'), null);
    });

    it('should disable `convert` button for invalid value', () => {
        const from = document.getElementById('from');
        const send = document.getElementById('send');

        from.value = 'invalid unit';
        from.dispatchEvent(new Event('input'));

        chai.assert.equal(send.getAttribute('disabled'), 'disabled');
    });
});
