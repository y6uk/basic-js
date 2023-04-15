const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const sampleActivity = '14'

function dateSample(/* sampleActivity */) {

  if(typeof sampleActivity !== 'number') {
    return false
  } else {
    return 'zbs'
  }
  Math.ceil()
}

console.log(dateSample(sampleActivity))

module.exports = {
  dateSample
};
