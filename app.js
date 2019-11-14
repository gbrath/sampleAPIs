process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('express'),
    http = require('http'),
    config = require('./config/environment'),
    logger = require('./logger/logger.js');
const app = express();


require('./config/express')(app);
require('./api')(app);
require('./error')(app);


const port = config.http_port || process.env.PORT || '3000';
const http_server = http.createServer(app);


http_server.listen(port, config.ip, () => {
  logger.info('E server listening on %s:%d, in %s mode', config.ip, config.http_port, app.get('env'));
});




