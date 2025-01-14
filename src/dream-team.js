const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// const members = []

function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }

  let secretName = []

  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] == 'string') {
      secretName.push(members[i].trim().toUpperCase()) 
    }
  }

  if(secretName.length === 0) {
    return false
  }

  let res = secretName.sort().map(function (name) {
    return name[0].toUpperCase()
  })
  console.log(secretName)
  return res.join('')
}


module.exports = {
  createDreamTeam
};
