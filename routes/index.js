var express = require('express'); // express is a library
var router = express.Router(); // Router is our class

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

module.exports = router;
