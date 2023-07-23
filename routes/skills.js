var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills_controller');


/* GET home page. */
router.get('/', skillsController.index);

router.get('/new', skillsController.new);

router.get('/skills/:id', skillsController.show);

router.post('/', skillsController.create)

router.delete('/:id', skillsController.delete)

module.exports = router;

