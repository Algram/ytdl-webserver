var express = require('express');
var router = express.Router();
var speed = require('../speed');


var data = [];
var connected = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!connected) {
    res.io.on('connection', function(socket) {
      connected = true;
      console.log('a user connected');

      socket.on('disconnect', function() {
        console.log('user disconnected');
      });

      socket.on('ready', function() {
        socket.emit('test', data);
      });

      socket.on('test', function(url) {
        url.id = data.length + 1;

        speed.test(url, function(speed) {
          url.score = speed;
          data.push(url);
          res.io.emit('test', data);
        });
      });
    });
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
