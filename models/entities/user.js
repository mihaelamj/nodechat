var Entity = require('./entity');
var util = require("util");
var crypto = require('crypto');
var uuid = require('node-uuid');

function User(name, password) {
    Entity.call(this);//call super
    this.entityName = 'user';
    this.name = name;
    this.password = password;
    this.apiKey = uuid.v4();
};
util.inherits(User, Entity);

//template method
Entity.prototype.describeSpecific = function() {
    console.log('name: ' + this.name);
    console.log('password: ' + this.password);
    console.log('apiKey: ' + this.apiKey);
}

module.exports = User;