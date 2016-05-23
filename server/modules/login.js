var db = require("./database.js");
module.exports ={};

exports = {
    checkCredentials : function(req){
      console.log("checkCredentials");
      console.log("Checking ", req);
      console.log("Calling the db checker .. ");
      db.checkCredentials(req["username"],req["password"]);
      return(req);

    }
}

module.exports = exports;
