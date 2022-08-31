const slice = require('node-slice');

/**
 *
 * @param {number} limit
 */
function fancySlice(limit) {
  return slice(this.valueOf(), limit, true);
}

if (!String.prototype.fancySlice) String.prototype.fancySlice = fancySlice;
