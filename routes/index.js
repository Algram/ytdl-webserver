const express = require('express');
const router = express.Router();


let data = [
  {id: 1, author: "Pate Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
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
        socket.emit('message', data);
      });

      socket.on('message', function(msg) {
        msg.id = data.length + 1;
        data.push(msg);
        res.io.emit('message', data);
      });
    });
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
