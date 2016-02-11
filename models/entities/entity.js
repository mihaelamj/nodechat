var uuid = require('node-uuid');

function Entity(name) {
    this.name = name;
    this.objectID = uuid.v1();
    this.id = '';
    this.index = 0;
    this.timestamp = new Date();
};

//abstract
Entity.prototype.getStore = function() {
    return null;
}
//fetches mongo or nedb document
Entity.prototype.getDocument = function() {
    return null; 
}

var handleInsert = function(callback, err, newDocs, thisDocument, thisInserted) {
     var newItem = null;
     if (typeof(newDocs) === 'Array' && newDocs.length === 1) {
        newItem = newDocs[0];
     } else {
        newItem = newDocs;
     }
        
     //put db given id onto self
     if (err == null && newItem !== null) {
        thisInserted.id = newDocs._id;
     } 
    callback(err, thisDocument);
}

Entity.prototype.add = function(callback) {
    //pointer to self
    var thisInserted = this;
    
    //fetch document
    var thisDocument = this.getDocument();
    if (thisDocument == null) {
        callback({error: 'No Document'}, null);
        return;
    }
    
    var store = this.getStore();
    if (store !== null) {
        store.insert(thisDocument, function(err, newDocs) {
            handleInsert(callback, err, newDocs, thisDocument, thisInserted);
        });
    } else {
        thisDocument.save(function(err, newDocs) {
            handleInsert(callback, err, newDocs, thisDocument, thisInserted);
        });
    }
};

module.exports = Entity;

