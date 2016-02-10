var Store = require('./db.js').Store;

var User = require('./../../entities/user');
var UserSchema = require('./user_schema.js');

User.prototype.toMongo = function() {
    var thisUser = UserSchema({
        name: this.name,
        password: this.password,
        apiKey: this.apiKey,
        dateCreated: this.dateCreated,
        index: this.index,
        objectID: this.objectID
    });
    return thisUser;
}

//callback (err, user)
User.prototype.addToDB = function(callback) {
    
    var thisMongo = this.toMongo();
    //pointer to self
    var thisInserted = this;
    var newItem = null;
    
    //insert
    thisMongo.save(function(err, newDocs) {
                  
        if (typeof(newDocs) === 'Array' && newDocs.length === 1) {
            newItem = newDocs[0];
        } else {
            newItem = newDocs;
        }
        
        //put db given id onto self
        if (err == null && newItem !== null) {
            thisInserted.id = newDocs._id;
            // callback(err, thisInserted);
        }
        
        callback(err, thisMongo);
    });
};