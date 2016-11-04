var db = require("../Helpers/Database.js");
module.exports ={};

const QUERY_GET_SUBSCRIPTIONS ="SELECT users.fname,users.lname FROM subscriptions JOIN users ON subscriptions.subscribeTo_id = users.uid WHERE subscriptions.uid = 1";
exports = {
    fetchSubscriptions : function(){
      return new Promise(function(resolve, reject) {
        connection = db.connection;
        connection.query(QUERY_GET_SUBSCRIPTIONS, function(err, rows, fields) {
         if (err){
          reject(err);
         }
         else if (rows.length >= 1){
           var retObj = [];
           for(var i =0;i<rows.length;i++){
             var newRet = {};
             console.log("Current Object is : ",rows[i]["fname"]);
             newRet.fname = rows[i]["fname"];
             newRet.lname = rows[i]["lname"];
             retObj.push(newRet);
           }
           var result ={"status":1,data:retObj};
           resolve(result);
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
