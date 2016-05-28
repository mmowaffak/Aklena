var express = require('express');
var mysql   = require('mysql');
var jquery = require('jquery');
var db = require('./modules/database.js');
var bodyParser = require("body-parser");
var path = require('path');
var login = require("./modules/login");
var app = express();

db.initiate();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('assets'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve("index.html"));
});
 app.get('/dashboard', function (req, res) {
   res.sendFile(path.resolve("dashboard.html"));
 });
app.post('/login',function (req, res) {
 login.checkCredentials(req.body,res);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
