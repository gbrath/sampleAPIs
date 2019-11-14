'use strict';

module.exports = (app) => {

    const clientErrorHandler = (err, req, res, next) => {
        if (req.xhr) {
            res.status(500).send({ error: 'Something failed!' })
        } else {
            next(err)
        }
    };

    const errorHandler = (err, req, res, next) => {
        res.status(500);
        res.status(500).send({ error: 'Something failed!' })
        // res.render('error', { error: err })
    };

    const logErrors = (err, req, res, next) => {
        console.error(err.stack);
        next(err)
    };

    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
}
