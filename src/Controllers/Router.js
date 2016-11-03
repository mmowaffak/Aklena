var express = require('express');
var router = express.Router();
var path = require('path');
var login = require("./Login");


module.exports = {
  loadRoutes : function(app){
    router.get('/', function (req, res) {
      //@FIXME here you should forward any request to a central handler
      // the redis part should be a middleware checked by every one
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

    router.get('/dashboard', function (req, res) {
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


    app.use('/',router);
  }
}
