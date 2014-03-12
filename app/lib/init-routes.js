'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require('../routes/home');
  var user = require('../routes/user');

  app.get('/', d, home.index);
  app.get('/register', d, user.fresh);
  app.post('/register', d, user.create);
  console.log('Routes Loaded');
  fn();
}

