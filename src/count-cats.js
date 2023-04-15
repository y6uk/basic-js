const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// const matrix = [
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]


function countCats(matrix) {
  
  if(matrix.length == 0) {
    return 0
  }

  let totalCats = 0
  let columnCount = matrix[0].length

  for(let i = 0; i < columnCount; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[j][i] === '^^') {
        totalCats++
      }   
    }
  }
  // return totalCats
  return columnCount
}

module.exports = {
  countCats
};
