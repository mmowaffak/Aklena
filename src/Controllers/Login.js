var db = require("./Database.js");
module.exports ={};
exports = {
    checkCredentials : function(body,res){
      return new Promise(function(resolve, reject) {
        connection = db.connection;
        var queryToCheck = "SELECT * from aklena.users where username='"+body["username"]+"' and password='"+body["password"]+"'";
           connection.query(queryToCheck, function(err, rows, fields) {
         if (err){
          retObj = {"status":0};
          reject(err);
         }
         else if (rows.length >= 1){
           var retObj ={"status":1,"id":rows[0]["uid"],"name":rows[0]["fname"],"username":rows[0]["username"]};
           resolve(retObj);
          }

         else if (rows.length ==0 || !rows){
            retObj = {"status":-1};
            resolve(retObj);
        }
         });
      });
    }
}

module.exports = exports;
