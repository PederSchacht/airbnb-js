'use strict';

module.exports = User;

function User(data){
  this.email = data.email;
  this.password = data.password;
  this.role = data.role;
};
