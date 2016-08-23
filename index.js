var express = require('express');
var massive = require('massive');

var app = express();

//created database by running CREATE DATABASE yourdbname;  dont forget that fucking semicolon


var connectionString = "postgress://aleeexkang@localhost/sql_practice1"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync
var db = app.get("db"); // setting var db to app.get "db


app.listen(3030, function() {
  console.log('lel');
});
