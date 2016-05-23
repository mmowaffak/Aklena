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

  checkCredentials : function(username, password){
       connection.query('SELECT * from Aklena.employees', function(err, rows, fields) {
     if (err) throw err;
       console.log('In database checking zzeft ... The solution is: ', rows);
     });
     return 1;
  }

  }


module.exports = exports;
