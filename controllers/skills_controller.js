const skillsModel = require ('../models/skill_model');

function index(req, res) {
    res.render('skills_view', {
      skills: skillsModel.getAllSkills(),
      title: 'Dev Skills'
    });
  }

  function show(req, res) {
    res.render('show_view', {
    skill : skillsModel.findSkill(req.params.id),
    })
  }

  module.exports = {
    index,
    show
  };