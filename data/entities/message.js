var uuid = require('node-uuid');

function Message(author, text, type) {
  this.text = text;
  this.author = author;
  this.type = type;
  this.timestamp = new Date();
  this.objectID = uuid.v1();
  this.id = '';
};

Message.prototype.describe = function() {
    console.log('text: '  + this.text);
    console.log('author: ' + this.author);
    console.log('objectID: ' + this.objectID);
    console.log('id: ' + this.id);
}

module.exports = Message;