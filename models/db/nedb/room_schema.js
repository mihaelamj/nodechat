var Room = require('./../../entities/room');

Room.prototype.toNedb = function() {
    return {
        name: this.name,
        author: this.author,
        dateCreated : this.dateCreated,
        objectID : this.objectID,
        index: this.index,
//TODO: add user and message IDs into arrays
        users:[],
        messages:[]
    }
}

Room.prototype.fromNedb = function(doc) {
    this.name = doc.name;
    this.id = doc._id;
    this.objectID = doc.objectID;
    this.author = doc.author;
    this.index = doc.index;
    this.dateCreated = doc.dateCreated;
//TODO: fetch user and message objects from arrays of IDs
    this.users = [];
    this.messages = [];
}