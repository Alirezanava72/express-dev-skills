var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills_controller');


/* GET home page. */
router.get('/', skillsController.index);
router.get('/skills/:id', skillsController.show);

module.exports = router;

