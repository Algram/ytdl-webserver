var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/comments', function(req, res, next) {
  var data = [
    {id: 1, author: "Pate Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ];
  res.send(data);
});

module.exports = router;
