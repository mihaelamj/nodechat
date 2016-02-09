var uuid = require('node-uuid');

//Room class
function Room(name) {
  this.name = name;
  this.id = uuid.v1();
  this.index = 0;
  this.users = new Array();
  this.messages = new Array();
  this.dateCreated = new Date();
};

Room.prototype.describe = function() {
    console.log('room: '  + this.name);
    console.log('index: ' + this.index);
    console.log('id: ' + this.id);
}

//users
Room.prototype.findUser = function(userID) {

}

Room.prototype.addUser = function(userID) {

}

module.exports = Room;
