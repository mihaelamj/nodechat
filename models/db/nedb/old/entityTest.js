
var Entity = require('./../../entities/entity');
//nedb
var TestStore = require('./db.js').TestStore;

Entity.prototype.getStore = function() {
    return TestStore;
}

//fetches nedb document
Entity.prototype.getDocument = function() {
    return {
        name: this.name,
        timestamp : this.timestamp,
        objectID : this.objectID,
        index: this.index
    }
}