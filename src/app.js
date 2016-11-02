var express = require('express');
var db = require('./Controllers/database.js');
var bodyParser = require("body-parser");
var path = require('path');
var login = require("./Controllers/login");
var cookieParser = require('cookie-parser');
var app = express();
var dispatcher = require('./Controllers/dispatcher');
var Session = require('./Helpers/Session');

app.use(cookieParser());

db.initiate();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('Public'));

Session.startSession(app);

app.get('/', function (req, res) {
  //@FIXME here you should forward any request to a central handler
  if(req.session ==undefined){
    console.log("REDIS NOT INITIALIZED !");
    res.send("REDIS IS NOT INITIALIZED, In your console type 'redis-server --daemonize yes'to start the process.");
  }
  else{
    if(req.session.userKey && req.session.userKey!==undefined){
      res.sendFile(path.resolve("dashboard.html"));
    }
    else {
      res.sendFile(path.resolve("login.html"));
    }
  }
});
 app.get('/dashboard', function (req, res) {
   if(req.session.userKey){
     res.sendFile(path.resolve("dashboard.html"));
   }
   else{
     res.sendFile(path.resolve("login.html"));
   }
 });
//  app.post('/test', function (req, res) {
//    console.log(req.body);
//  });
//
//
//
app.post('/login',function (req, res) {
 login.checkCredentials(req.body).then(function(data){
   if(data.status==1){
      req.session.userKey=data.id;
      req.session.name=data.name;
      req.session.username=data.username;
      var cookieData = JSON.stringify({'name': data.name, 'id':data.id});
      res.cookie('data',cookieData , { maxAge: 900000 }); }
   res.send(data);
 }).catch(function(err){
   console.log(err);
 });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
