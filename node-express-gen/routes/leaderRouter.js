var express = require('express'),
    bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function(req, res, next) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send all the leaders to you!');
    })
    .post(function(req, res, next) {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Will delete all the leaders!');
    });

leaderRouter.route('/:leaderID')
    .all(function(req, res, next) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send details of the leader: ' + req.params.leaderID + ' to you!');
    })

.put(function(req, res, next) {
    res.write('Updating the leader: ' + req.params.leaderID + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
})

.delete(function(req, res, next) {
    res.end('Deleting leader: ' + req.params.leaderID);
});

module.exports = leaderRouter;