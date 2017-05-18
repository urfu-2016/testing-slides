function controller(err, req, res, next) {
    /* eslint max-params: 0, no-unused-vars: 0 */

    console.error(err.stack);
    res.status(500).send('Something broke!');
}
