'use strict';

module.exports = function (app) {
  app.use('/api/task', require('./task'));
}

