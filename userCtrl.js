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


  }
}
