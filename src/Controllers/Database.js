var mysql   = require('mysql');
module.exports ={};
connection ='';

exports = {
  initiate:function (){

  connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'test',
      password : ''
    });
  module.exports.connection = connection;
  console.log("Elmafrood connecting ... !");
    if(connection.connect()){
      console.log("Database is up!");
    }
  },
  }


module.exports = exports;
