var Message = require('./../../entities/message');
var Store = require('./db.js').Store;
var MessageSchema = require('./message_schema.js');

Message.prototype.toMongo = function() {
    
    var thisMessage = MessageSchema({
        text: this.text,
        author: this.author,
        type: this.type,
        timestamp: this.timestamp
    });
    
    return thisMessage;
}

//callback (err, user)
Message.prototype.addToDB = function(callback) {
    
    var thisMongo = this.toMongo();
    //pointer to self
    var thisInserted = this;
    
    //insert
    thisMongo.save(function(err, newDocs) {
                  
        if (typeof(newDocs) === 'Array' && newDocs.length === 1) {
            newMessage = newDocs[0];
        } else {
            newMessage = newDocs;
        }
        
        //put db given id onto self
        if (err == null) {
            thisInserted.id = newDocs._id;
            // callback(err, thisInserted);
        }
        
        callback(err, thisMongo);
    });
    
    
};