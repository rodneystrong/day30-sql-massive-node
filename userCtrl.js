/*Export an object with 5 functions
Create, GetOne, GetAll, Update, Delete*/

//pulling in exports from the index.js file
var app = require('./index.js');
// the name 'app' comes from our var named app in the index.js that is equal to our module.exports
var db = app.get('db');

module.exports = {
  //function
  readUsers: function(req, res, next) {
    //db from the var above. read_users from our sql filename
    db.read_users();
    res.send('got all users');

  }
};
