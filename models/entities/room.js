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

module.exports = Room;
