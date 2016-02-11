var Entity = require('./entity');
var util = require("util");

//inherit from Entity
function Message(author, text, type)  {
    Entity.call(this);//call super, sorta
    //or  Entity.apply(this);
    this.entityName = 'message';
    this.text = text;
    this.author = author;
    this.type = type;
}
util.inherits(Message, Entity);

//template method
Entity.prototype.describeSpecific = function() {
    console.log('text: '  + this.text);
    console.log('author: ' + this.author);
}

module.exports = Message;