var express = require('express');
var router = express.Router();
var path = require('path');
var login = require("./Login");
var Session = require ("../Helpers/Session");

module.exports = {
  loadRoutes : function(app){
    router.get('/', function (req, res) {
      if(Session.checkSession(req)){
        if(Session.isLoggedIn(req)){
          res.sendFile(path.resolve("dashboard.html"));
        }
        else{
          res.sendFile(path.resolve("login.html"));
        }
      }
      else {
        res.send("REDIS IS NOT INITIALIZED, In your console type 'redis-server --daemonize yes'to start the process. If on windows, use : sudo service redis-server start");
      }
    });

    router.get('/dashboard', function (req, res) {
      //@FIXME shouldnt this be in a middleware?
      if(req.session.userKey){
        res.sendFile(path.resolve("dashboard.html"));
      }
      else{
        res.sendFile(path.resolve("login.html"));
      }
    });

    router.post('/login',function (req, res) {
      //@FIXME there shouldn't be anylogic here. just routing to a controller/route
     login.checkCredentials(req.body).then(function(data){
       if(data.status==1){
          req.session.userKey=data.id;
          req.session.name=data.name;
          req.session.username=data.username;
          console.log("Sending back a cookie .. ");
          var cookieData = JSON.stringify({'name': data.name, 'id':data.id});
          res.cookie('data',cookieData , { maxAge: 900000 }); }

          else{
            data = "noLogin";
          }
       res.send(data);
     }).catch(function(err){
       console.log(err);
     });
    });

    router.get('/logout',function(req,res){
      console.log("Logging out ... ");
      res.sendFile(path.resolve("login.html"));
      //Session.logout();
    });
    app.use('/',router);
  }
}