var helper = require ("panas").helper;
var handle;


module.exports = BKN;

/**
 * The BKN handlers
 */
function BKN (options) {
  var model = require ("./model")(options);
  handle = helper.Handle (model);
  if (!(this instanceof BKN)) return new BKN (options);
}

BKN.prototype.find = function * (){
  yield handle.get (this, "find", {});
}


