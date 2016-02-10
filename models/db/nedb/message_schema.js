var Message = require('./../../entities/message');

Message.prototype.toNedb = function() {
    return {
        text: this.text,
        author: this.author,
        type: this.type,
        timestamp : this.timestamp
    }
}

Message.prototype.fromNedb = function(doc) {
  this.text = doc.text;
  this.author = doc.author;
  this.type = doc.type;
  this.timestamp = doc.timestamp;
  this.id = doc._id;
}