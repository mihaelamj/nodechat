var User = require('./../../entities/user');

User.prototype.toNedb = function() {
    return {
        name: this.name,
        password: this.password,
        apiKey: this.apiKey,
        dateCreated : this.dateCreated,
        objectID : this.objectID,
        index: this.index
    }
}

User.prototype.fromNedb = function(doc) {
    this.name = doc.name;
    this.password = doc.password;
    this.apiKey = doc.apiKey;
    this.dateCreated = doc.dateCreated;
    this.id = doc._id
    this.index = doc.index;
    this.objectID = doc.objectID;
}