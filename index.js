var express = require('express');
var massive = require('massive');
var cors = require('cors');
var bodyParser = require('body-parser');

//now we got psql runnin in terminal.
// \l will pull up list of current dbs.
// \c to connect
//create database yourdbname; is the command you run to create a new db

//after you created db and made your temp.sql file, run this: psql -f temp.sql;

var app = module.exports = express();

//this connects to our angular front end.
app.use(bodyParser.json());
app.use(cors());
//make node serve our files
app.use(express.static(__dirname + '/public'));

var connectionString = "postgress://aleeexkang@localhost/sql_massive_node"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync
var db = app.get("db"); // setting var db to app.get "db


//this has to be after our db connections above (var connectionString, massiveInstance, etc)
var userCtrl = require('./userCtrl.js');

//start endpoints
// app.get('/me', function(req, res, next) {
//   console.log('success!');
//   res.send('hey postman! ;D');
// })

app.get('/users', userCtrl.readUsers);
app.get('/user/:id', userCtrl.readUser);


//end endpoints

// app.listen(3030);

var port = 3030;
app.listen(port, function() {
  console.log('listening on port', port);
});
