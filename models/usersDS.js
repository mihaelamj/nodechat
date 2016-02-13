//load appropriate entities
var Store = require('./db//nedb/entities').UserStore;
// require('./db/mongo/entities');

var uuid = require('node-uuid');
//model
var Page = require('./entities/page');
var User = require('./entities/user');

var UsersDataSource = {
    //private properties
    _users : new Array(),
    _itemsPerPage : 10,
    //public properties
    page : new Page(0, 0, 0, 0),
    
    getUsers: function(callback) {
        
        Store.find({}, function(error, foundUsers) {
            var cleanUsers = foundUsers.map(function(user, i, a) {
            return cleanupUser(user);
        });

        callback(error, cleanUsers);
        });
    },
  
}
