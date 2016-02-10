var Entity = require('./../../entities/entity');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//make schema
var EntitySchema = new Schema({
    name: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    index: {type: Number, required: false},
    objectID: {type: String},
    id: {type: String}
});

//fetches nedb document
Entity.prototype.getDocument = function() {
     var thisEntity = EntitySchema({
        name: this.name,
        timestamp: this.timestamp,
        index: this.index,
        objectID: this.objectID
    });
    return thisEntity;
}