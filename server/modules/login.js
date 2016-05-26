var db = require("./database.js");
module.exports ={};
var connection;
exports = {
    checkCredentials : function(body){
      connection = db.getConnection();
      var queryToCheck = "SELECT * from Aklena.employees where username='"+body["username"]+"' and password='"+body["password"]+"'";
      //console.log("The query is ", queryToCheck);
         connection.query(queryToCheck, function(err, rows, fields) {
           //console.log("ROWS : ", rows, "It's length is ", rows.length);
           //console.log("condition true?", rows.length >=1)
       if (err){
         return "DB Error";
       }
       else if (rows.length >= 1){
         console.log("returning true ...");
         return "Successful, should redirect";
       }
       else if (rows.length ==0 || !rows){
         return "No user found";
      }
       });
    }
}

module.exports = exports;
