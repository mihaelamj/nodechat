var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    apiKey: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    index: {type: Number, required: false},
    objectID: {type: String},
    id: {type: String}
});

module.exports= mongoose.model('User', userModel);