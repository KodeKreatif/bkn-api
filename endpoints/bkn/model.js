var helper = require ("panas").helper;
var thunkified = helper.thunkified;
var async = require ("async");
var _ = require ("lodash");
var boom = helper.error;
var bknScrapper = require("bkn-scrapper");
var cache = {};

/**
 * BKN class
 */
function BKN (options) {
  this.options = options;
  if (!(this instanceof BKN)) return new BKN(options);
  this.name = "user";
}

BKN.prototype.find = function(ctx, options, cb) {
  var bkn = new bknScrapper();
  var nip = ctx.params.nip;
  
  if (!nip) {
    return cb(boom.badRequest ("Bad NIP"));
  }

  if (cache[nip]) {
    return cb(null, cache[nip]);
  }

  bkn.getData(nip, function(data) {
    var obj = {
      object: "bkn",
      data: data
    }
    cache[nip] = obj;
    cb(null, obj);
  });
}

module.exports = function(options) {
  return thunkified (BKN(options));
}
