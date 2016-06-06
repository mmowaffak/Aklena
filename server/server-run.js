var express = require('express');
var jquery = require('jquery');
var db = require('./modules/database.js');
var bodyParser = require("body-parser");
var path = require('path');
var login = require("./modules/login");
var cookieParser = require('cookie-parser');
var redis   = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var client  = redis.createClient();
var app = express();
app.use(cookieParser());

db.initiate();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('assets'));
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  22260}),
    saveUninitialized: false,
    resave: false,
    name :"moustafa"
}));
app.get('/', function (req, res) {
  if(req.session.userKey){
    res.sendFile(path.resolve("dashboard.html"));
  }
  else {
    res.sendFile(path.resolve("login.html"));
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
app.post('/login',function (req, res) {
 login.checkCredentials(req.body).then(function(data){
   if(data.status==1){
      req.session.userKey=data.id;
      req.session.name=data.name;
      req.session.username=data.username;
      console.log("Setting cookie with",data.name);
      var cookieData = JSON.stringify({'name': data.name, 'id':data.id});
      console.log("COOKIIEDATAAAA:", cookieData);
      res.cookie('data',cookieData , { maxAge: 900000 }); }
   res.send(data);
 }).catch(function(err){
   console.log(err);
 });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
