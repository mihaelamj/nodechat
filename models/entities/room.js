
var uuid = require('node-uuid');

//Room class
function Room(name) {
  this.name = name;
  this.id = '';
  this.objectID = uuid.v1();
  this.author = '';
  this.index = 0;
  this.dateCreated = new Date();
  this.users = new Array();
  this.messages = new Array()
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
