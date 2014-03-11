
'use strict';

process.env.DBNAME = 'airbnb-test';
var expect = require('chai').expect;
var User;
var u1, u2, u3;

describe('User', function(){
  before(function(done){
    var initMongo = require('../../app/lib/init-mongo');
    initMongo.db(function(){
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      u1 = new User ({email:'bob@aol.com', password:'1234'});
      u2 = new User({email:'matt@aol.com', password: 'abcd'});
      u3 = new User({email:'eril@aol.com', password: 'bcdf'});
      //u1.hashPassword(function(){
        //u1.insert(function(){
          //u2.hashPassword(function(){
            //u2.insert(function(){
              //u3.hashPassword(function(){
                //u3.insert(function(){
      done();
      //          });
        //      });
          //  });
      //    });
       // });
    //  });
    });
  });

  describe('new', function(){
    it('should create a new User object', function(){
      u1 = new User ({role:'host', email:'bob@aol.com', password:'1234'});
      expect(u1).to.be.instanceof(User);
      expect(u1.email).to.equal('bob@aol.com');
      expect(u1.password).to.equal('1234');
    });
  });
});
