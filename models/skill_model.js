const skills = [
    {title: 'SQL', id: 1 },
    {title: 'MongoDB', id: 2 },
    {title: 'JS', id: 3 },
    {title: 'Node', id:4 }
];

function findSkill (id_param) {
  id_param_int = parseInt(id_param);
  return skills.find(skill => skill.id === id_param_int);
}

function getAllSkills() {
    return skills;
  }

  module.exports = {
    getAllSkills,
    findSkill
    
  };


 