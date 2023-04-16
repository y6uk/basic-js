const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// let n = 100673123

function getSumOfDigits(/* n */) {
  let res = n.toString().split('').reduce((acc, num) => +num + acc , 0);
  return res > 9 ? getSumOfDigits(res) : res;
}

// console.log(getSumOfDigits(n))

module.exports = {
  getSumOfDigits
};
