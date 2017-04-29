// crawline.js

function crawline(text, cb) {
    const letters = text.split('');

    function print() {
        if (!letters.length) return cb();

        process.stdout.write(letters.shift());
        setTimeout(print, 100);
    }

    print();
}

module.exports = crawline;
