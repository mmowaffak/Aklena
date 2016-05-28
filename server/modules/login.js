var db = require("./database.js");
module.exports ={};
exports = {
    checkCredentials : function(body,res){
      connection = db.connection;
      var queryToCheck = "SELECT * from Aklena.employees where username='"+body["username"]+"' and password='"+body["password"]+"'";
         connection.query(queryToCheck, function(err, rows, fields) {
       if (err){
        retObj = {"status":0};
         res.send(retObj);
       }
       else if (rows.length >= 1){
         var retObj ={"status":1,"id":rows[0]["id"]};
         res.send(retObj);
        }
       
       else if (rows.length ==0 || !rows){
          retObj = {"status":2};
         res.send(retObj);
      }
       });
    }
}

module.exports = exports;
