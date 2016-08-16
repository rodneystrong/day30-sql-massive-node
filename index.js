var express = require('express');
var massive = require('massive');

//now we got psql runnin in terminal.
// \l will pull up list of current dbs.
// \c to connect
//create database yourdbname; is the command you run to create a new db

//after you created db and made your temp.sql file, run this: psql -f temp.sql;

var app = express();

var connectionString = "postgress://aleeexkang@localhost/sql_massive_node"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync
var db = app.get("db"); // setting var db to app.get "db

app.listen(3030);
