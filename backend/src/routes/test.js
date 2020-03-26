var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('test page');
});

router.get('/me', function(req, res, next) {
  res.send('This is my test page :)');
});

module.exports = router;
