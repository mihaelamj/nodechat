var mongoose = require('mongoose');
var EntitySchema = require('./SchemaEntity');

var Schema = mongoose.Schema;
var util = require('util');

function AbstractAnimalSchema() {           
    Schema.apply(this, arguments);                                           
    this.add({                              
        name: String
    });                                     
};                                                                                 
util.inherits(AbstractAnimalSchema, Schema);

var AnimalSchema = new AbstractAnimalSchema();                                                                                    
var DogSchema = new AbstractAnimalSchema({                
    leg_type: String                                      
});                                                                                     
var Animal = mongoose.model('Animal', AnimalSchema); // our base model   
var Dog = Animal.discriminator('Dog', DogSchema); // our derived model (see discriminator)

//test
var BaseSchema = EntitySchema; 
var MessageSchema = new BaseSchema({
    message: String
});
var Base = mongoose.model('Base', EntitySchema.schema);
//exc
/*
  if (!(schema && schema.instanceOfSchema)) {
    throw new Error('You must pass a valid discriminator Schema');
  }
 */
var Message = Base.discriminator('Message', MessageSchema); // our derived model (see discriminator)


//test

var MessageSchema = new EntitySchema({
    text: {type: String, required: true},
    author: {type: String, required: true},
    type: {type: String, required: false}
});

module.exports= mongoose.model('MessageSchema', MessageSchema);

// var mongoose = require('mongoose');
// var EntitySchema = require('./SchemaEntity');
// var Schema = mongoose.Schema;
// var util = require('util');

// function MessageSchemaModel() {           
//     EntitySchema.apply(this, arguments);     
//     // EntitySchema.schema.apply(this, arguments);                                      
//     this.add({    //exc                          
//         text: {type: String, required: true},
//         author: {type: String, required: true},
//         type: {type: String, required: false}
//     });                                     
// };
// util.inherits(MessageSchemaModel, EntitySchema); 
     
// var BaseSchema = mongoose.model('MessageSchema', new MessageSchemaModel());                                    
// module.exports= BaseSchema;

