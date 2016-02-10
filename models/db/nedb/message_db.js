var Message = require('./../../entities/message');
var UserStore = require('./db.js').UserStore;
var MessageSchema = require('./message_schema.js');
    
var cleanupMessage = function(message) {
  return {
    'id': message._id,
    'author': message.author,
    'type': message.type,
    'timestamp': message.timestamp
  };
}

//callback (err, user)
Message.prototype.addToDB = function(callback) {
    
    //convert self
    var thisNedb = this.toNedb();
    var newMessage = null;
    //pointer to self
    var thisInserted = this;
    
    //call insert
    UserStore.insert(thisNedb, function(err, newDocs) {
        
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

        callback(err, cleanupMessage(newMessage));
        
    });
    
}

