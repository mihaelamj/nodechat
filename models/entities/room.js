var Entity = require('./entity');
var util = require("util");

//Room class
function Room(name) {
    Entity.call(this);//call super
    this.entityName = 'room';
    this.name = name;
    this.author = '';
    this.users = new Array();
    this.messages = new Array()
};
util.inherits(Room, Entity);

//template method
Entity.prototype.describeSpecific = function() {
    console.log('name: ' + this.name);
    console.log('author: ' + this.author);
}

Entity.prototype.addMessage = function(message) {
    //TODO: check if id exists
    this.messages.push(message);
}

Entity.prototype.addUser = function(user) {
    //TODO: check if id exists
    this.users.push(user);
}

module.exports = Room;
