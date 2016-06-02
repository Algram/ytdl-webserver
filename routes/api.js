var express = require('express');
var router = express.Router();


var data = [
  {id: 1, author: "Pate Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
/* GET home page. */
router.get('/comments', function(req, res, next) {
  res.send(data);
});

router.post('/comments', function(req, res, next) {
  req.body.id = data.length + 1;
  data.push(req.body);
});

module.exports = router;
