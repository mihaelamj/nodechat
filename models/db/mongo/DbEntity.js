var Store = require('./db.js').Store; //connects to store
var Entity = require('./../../entities/entity');
var EntitySchema = require('./SchemaEntity');

//fetches mongo document
Entity.prototype.getDocument = function() {
     var thisEntity = EntitySchema({
        entityName: this.entityName,
        timestamp: this.timestamp,
        index: this.index,
        objectID: this.objectID
    });
    return thisEntity;
}

//fetches mongo DB
// Entity.prototype.getStore = function() {
//     return Store;
// }
