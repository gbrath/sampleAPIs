var bunyan = require('bunyan');
var logger = bunyan.createLogger({
  name: "MEAN",
  streams: [
    {
      level: "warn",
      stream: process.stderr
    }, {
      level: "info",
      stream: process.stdout
    },{
      level: "error",
      stream: process.stderr
    }
  ]
});

module.exports = logger;
