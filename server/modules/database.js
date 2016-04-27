var mysql   = require('mysql');
module.exports ={};

exports = {
  initiate:function (){
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    });
    if(connection.connect()){
      console.log("Database is up!");
    }
  //   connection.query('SELECT * from moustafa.employees', function(err, rows, fields) {
  // if (err) throw err;
  //   console.log('The solution is: ', rows[0].name);
  // });
  }
}

module.exports = exports;
