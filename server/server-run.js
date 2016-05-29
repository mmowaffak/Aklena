var express = require('express');
var mysql   = require('mysql');
var jquery = require('jquery');
var db = require('./modules/database.js');
var bodyParser = require("body-parser");
var path = require('path');
var login = require("./modules/login");
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

db.initiate();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('assets'))

app.get('/', function (req, res) {
  console.log("cookies" ,req.cookies);
  if(req.cookies.data ==undefined){
    console.log("sending back index");
    res.sendFile(path.resolve("index.html"));
  }
  else {
    console.log("da5alt fl else ... ");
    res.sendFile(path.resolve("dashboard.html"));
  }
});
 app.get('/dashboard', function (req, res) {
   if(req.cookies==undefined){
     console.log("sending back index");
     res.sendFile(path.resolve("index.html"));
   }
   else{
     console.log("sending back dashboard");
     res.sendFile(path.resolve("dashboard.html"));
   }
 });

app.post('/login',function (req, res) {
 login.checkCredentials(req.body).then(function(data){
   if(data.status==1){
      res.cookie("data",data.id);
   }
   res.send(data);
 }).catch(function(err){
   console.log(err);
 });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
