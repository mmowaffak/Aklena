var express = require('express');
var db = require('./Helpers/Database.js');
var app = express();
var cookieParser = require('cookie-parser');
var Session = require('./Helpers/Session');
var bodyParser = require("body-parser");
var Router = require('./Controllers/Router');


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('Public'));


Session.startSession(app);
db.initiate();
Router.loadRoutes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
