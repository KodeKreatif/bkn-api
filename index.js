/**
 * Dependency modules
 */
var panas = require ("panas");
var koa = require ("koa");

module.exports = function(options){

  options = options || {};
  options.root = __dirname + "/endpoints";
  options.driver = require ("mongoose");

  var mount = panas.api(options).burn();

  var app = koa();
  app.use(mount);

  return app;
}
