var db = require("./database.js");
module.exports ={};

exports = {
    checkCredentials : function(req){
      console.log("checkCredentials");
      console.log("Checking ", req);
      return(req);

    }
}

module.exports = exports;
