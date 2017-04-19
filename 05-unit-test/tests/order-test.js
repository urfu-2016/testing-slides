describe('Module name', () => {
    before(() => console.log(1));
    beforeEach(() => console.log(2));

    describe('method name', () => {
        before(() => console.log(3));
        beforeEach(() => console.log(4));

        it('should do something', () => console.log(5));
        it('should do other', () => console.log(6));
    });
});
