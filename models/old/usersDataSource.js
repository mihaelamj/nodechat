var Page = require('./../entities/page');
var User = require('./../entities/user');
var uuid = require('node-uuid');
//TODO: add DB from (future) config

var UsersDataSource = {
    //private properties
    _users : new Array(),
    _itemsPerPage : 10,
    //public properties
    page : new Page(0, 0, 0, 0),
    
    //make dummy users, will be replaced will DB fetch
    makeNumberOfUsers : function(numberOfUsers) {
        for (var index = 0; index < numberOfUsers; index++) {
            var pass = uuid.v1();
            var user = new User('user' + index, pass);
            user.index = index;
            //add it to rooms
            this._users.push(user);
        }
        //init 1st page
        this.page.firstPage(numberOfUsers, this._itemsPerPage);
    },
    
    fetchUsersForPage : function(pageNumber) {
        this.page.pageNo(pageNumber);
        return this._users.slice(this.page.startIndex);
    },
    
    fecthAllUsers : function() {
        return this._users.slice(0);
    },
    
    describeUsers : function(rooms) {
        console.log('page:');
        this.page.describe();
        console.log('--- ');
        
        console.log('users:');
        rooms.map(function(user, i) {
            user.describe();
            console.log('');
        });
    }
}

module.exports = UsersDataSource;