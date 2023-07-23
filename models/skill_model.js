const skills = [
    {title: 'SQL', id: 1 },
    {title: 'MongoDB', id: 2 },
    {title: 'JS', id: 3 },
    {title: 'Node', id:4 }
];

module.exports = {
  getAllSkills,
  findSkill,
  create,
  deleteOne,
 };


function findSkill (id_param) {
  id_param_int = parseInt(id_param);
  return skills.find(skill => skill.id === id_param_int);
}

function getAllSkills() {
    return skills;
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id_param_int);
    skills.splice(idx, 1);
  }

  function create(skill) {
  skills.push(skill);
}
 

 