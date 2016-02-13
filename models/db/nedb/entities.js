var UserStore = require('./db.js').UserStore;
var RoomStore = require('./db.js').RoomStore;
var GlobalStore = require('./db.js').GlobalStore;

//entities
var Entity = require('./../../entities/entity')

var User = require('./../../entities/user');
var Message = require('./../../entities/message');
var Room = require('./../../entities/room');

//for all entities
Entity.prototype.getDocument = function() {
    var document =JSON.stringify(this);
    return document;
}

Entity.prototype.getStore = function() {
    return GlobalStore;
}

// User.prototype.getStore = function() {
//     return UserStore;
// }

// Room.prototype.getStore = function() {
//     return RoomStore;
// }

module.exports = {
    // UserStore : UserStore,
    // RoomStore : RoomStore
    UserStore : GlobalStore,
    RoomStore : GlobalStore
}



