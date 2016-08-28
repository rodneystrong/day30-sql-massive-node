//export an object with 5 functions
//create, getOne, getAll, update, delete

var app = require('./index.js');

var db = app.get('db');

module.exports = {
  readUsers: function(req, res, next) {
    db.read_users(function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('wooord');
        res.json(response);
      }
    })
  },

  readUser: function(req, res, next) {
    db.read_user(req.params.id, function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('read singular, just one calorie');
        res.json(response);
      }
    })


  },

  createData: function(req,res) {
    //massive.js calls
    console.log(req.body.name);
    var bodyName = req.body.name;
    console.log(req.body.age);
    var bodyAge = req.body.age;

    //insert update save methods built into massive are better than using
    //stupid sql queries

    //this right here goes to the 'user' table, uses 'insert' which always requires
    //an object. so here name: is the column and bodyName is what we get
    //from the user.
    db.users.insert({name: bodyName, age: bodyAge}, function(error,response) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(response);
      }
    })
  }
}
