'use strict';

let express = require('express'),
    controller = require('./task-contorller');

let router = express.Router();
router.post('/status', controller.taskStatus);
router.get('/check', controller.healthCheck);
module.exports = router;
