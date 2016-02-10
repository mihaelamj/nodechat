var Message = require('./../../entities/message');
var UserStore = require('./db.js').UserStore;

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

