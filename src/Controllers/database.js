var mysql   = require('mysql');
module.exports ={};
connection ='';

exports = {
  initiate:function (){

  connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    });
  module.exports.connection = connection;
    if(connection.connect()){
      console.log("Database is up!");
    }
  },
  }


module.exports = exports;
