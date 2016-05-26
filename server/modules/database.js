var mysql   = require('mysql');
module.exports ={};
var connection ;
exports = {
  initiate:function (){
  connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    });
    if(connection.connect()){
      console.log("Database is up!");
    }
  },

  getConnection: function(){
    return connection;
  }

  //@FIXME this should be made into a clean database api with sql injection avoidance


  }


module.exports = exports;
