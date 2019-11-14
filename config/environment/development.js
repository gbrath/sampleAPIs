'use strict';
// Development specific configuration
// ==================================
module.exports = {
  dist: 'dist',
  server: 'src/server',
  views: 'views',
  DOMAIN: 'http://' + this.ip + ':' + this.port,
  // Server IP
  ip: process.env.IP || 'localhost',
  // Server port
  http_port: process.env.HTTP_PORT || '3000',
  https_port: process.env.HTTPS_PORT || '443',
};
