const taskHelper = require('./task-helper'),
    logger = require('../../logger/logger.js');

exports.taskStatus = (req, res) => {

    let query = req.body;
    // logger.info(query);

    taskHelper.getTaskStatus(query).then((status) => {
        res.json({open: status});
    }).catch(err => {
        res.json({success: false, msg: err.message});
    });
}
 exports.healthCheck = (req, res) => {
 	res.json({success: true, msg: 'healthCheck ok'});
 }