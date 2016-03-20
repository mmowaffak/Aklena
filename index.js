var express = require('express');
var mysql      = require('mysql');
var app = express();

function initiateDB(){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });
  connection.connect();
  connection.query('SELECT * from moustafa.employees', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].name);
});
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/database', function (req, res) {
  initiateDB();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
