var mysql = require('mysql');
module.exports = {};
connection = '';

exports = {
  initiate: function() {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'aklena'
    });
    module.exports.connection = connection;
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    });
  },
  terminate : function(){
    //This will close the DB connection
  },
  query : function(){
    //Sanitation and other functions?
  }
}


module.exports = exports;
