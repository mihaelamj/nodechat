var Store = require('./db.js').Store; //connects to store

var Message = require('./../../entities/message');
var MessageSchema = require('./SchemaMessage');

//fetches mongo document
Message.prototype.getDocument = function() {
     var thisEntity = MessageSchema({
        // Schema.apply(this, arguments);
        text: this.text,
        author: this.author,
        type: this.type
    });
    return thisEntity;
}
