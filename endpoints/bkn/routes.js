var helper = require ("panas").helper;
var Router = helper.Router;

module.exports = Routes;

function Routes (name, mid, handle) {

  var router = new Router(name, mid);

  router.GET ("/bkn/:nip", handle.find);
  return router;
}
