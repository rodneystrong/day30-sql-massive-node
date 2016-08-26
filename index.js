var express = require('express');
var massive = require('massive');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = module.exports = express();

//created database by running CREATE DATABASE yourdbname;  dont forget that fucking semicolon


var connectionString = "postgress://aleeexkang@localhost/sql_practice1"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync
//var db = app.get("db"); // setting var db to app.get "db

var userCtrl = require('./userCtrl.js');
// userCtrl.readUsers();

// app.get('/me', function() {
//   console.log('you got it dood');
// })

app.get('/users', userCtrl.readUsers);

app.listen(3030, function() {
  console.log('lel');
});
