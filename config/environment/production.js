'use strict';

var path = require('path');
// Production specific configuration
// =================================
module.exports = {
    root: path.normalize(__dirname + '/../../../..'),
    dist : 'dist',
    DOMAIN: '',
    // Server IP
    ip: process.env.IP || 'localhost',
    // Server port
    http_port: process.env.HTTP_PORT || '80',
    https_port: process.env.HTTPS_PORT || '443'
};
