var express = require('express');
var massive = require('massive');

//now we got psql runnin in terminal.
// \l will pull up list of current dbs.
// \c to connect
//create database yourdbname; is the command you run to create a new db

//after you created db and made your temp.sql file, run this: psql -f temp.sql;

var app = express();

app.listen(3030);
