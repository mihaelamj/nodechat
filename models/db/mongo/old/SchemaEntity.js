// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var entityModel = new Schema({
//     entityName: {type: String, required: true},
//     timestamp: {type: Date, default: Date.now},
//     index: {type: Number, required: false},
//     objectID: {type: String},
//     id: {type: String}
// });

// module.exports= mongoose.model('EntitySchema', entityModel);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var util = require('util');

function EntitySchemaModel() {           
    Schema.apply(this, arguments);                                          
    this.add({                              
        entityName: {type: String, required: true},
        timestamp: {type: Date, default: Date.now},
        index: {type: Number, required: false},
        objectID: {type: String},
        id: {type: String}
    });                                     
};
util.inherits(EntitySchemaModel, Schema);      

// module.exports= mongoose.model('EntitySchema', EntitySchemaModel);
//You're trying to create a model off a schema class, not a schema instance
// module.exports = mongoose.model('EntitySchema', new EntitySchemaModel());
var BaseSchema = mongoose.model('EntitySchema', new EntitySchemaModel());                                    
module.exports= BaseSchema;

