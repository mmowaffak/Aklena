var mysql = require('mysql');
module.exports = {};
connection = '';

exports = {
  initiate: function() {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'test',
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
}


module.exports = exports;
