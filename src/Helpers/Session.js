var redis = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);

module.exports = {};
exports = {
    startSession: function(app) {
        var client = redis.createClient();
        app.use(session({
            secret: 'ssshhhhh',
            // create new redis store.
            store: new redisStore({
                host: 'localhost',
                port: 6379,
                client: client,
                ttl: 22260
            }),
            saveUninitialized: false,
            resave: false,
            name: "moustafa"
        }));
    },
    endSession: function(req) {
        req.session.destroy();
    },
    isLoggedIn: function(req, res) {
        if (req.session.userKey && req.session.userKey !== undefined) {
            console.log("Session ID", req.session.id);
            console.log("Session is :", req.session);
            return true;
        } else {
            return false;
        }
    },
    checkSession: function(req) {
        if (req.session == undefined) {
            return false;
        } else {
            return true;
        }
    },
    logout : function(req){
      req.session.destroy();
    }
}
module.exports = exports;
