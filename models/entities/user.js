var uuid = require('node-uuid');
var crypto = require('crypto');

function User(name, password) {
  this.name = name;
  this.password = password;
  this.apiKey = uuid.v4();
  this.dateCreated = new Date();
  this.id = ''; // will be provided by database
  this.index = 0;
  this.objectID = uuid.v1();
};

User.prototype.describe = function() {
    console.log('name: '  + this.name);
    console.log('password: ' + this.password);
    console.log('id: ' + this.id);
}

module.exports = User;