'use strict';
var bodyParser = require('body-parser'),
    morgan = require('morgan'),
    xssFilter = require('x-xss-protection');


module.exports =  (app) => {
    const env = app.get('env');
    app.enable('trust proxy');
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json({limit: 1024 * 1024 * 10, type: 'application/json'}));
    app.use(bodyParser.raw({limit: 1024 * 1024 * 10, type: 'application/*'}));
    app.disable('x-powered-by');
    app.use(xssFilter());


    app.set('view engine', 'html');

   // setup the logger
    app.use(morgan('combined', { stream: process.stdout }))
    // app.use(morgan('combined'));

}
