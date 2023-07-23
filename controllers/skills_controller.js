const skillsModel = require ('../models/skill_model');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteTodo
};

function index(req, res) {
    res.render('skills_view', {
      skills: skillsModel.getAllSkills(),
      title: 'Dev Skills'
    });
  }

  function show(req, res) {
    res.render('show_view', {
    skill: skillsModel.findSkill(req.params.id),
    title: 'Skills details'
    })
  }

  function newSkill(req, res) {
    res.render('skills_view/new', { 
      title: 'New Skill'});
  }

  function deleteSkill(req, res) {
    skillsModel.deleteOne(req.params.id);
    res.redirect('/skills_view');
  }
  
  function create (req, res) {    
    skillsModel.create(req.body);
     res.redirect('/show_view');
  }

