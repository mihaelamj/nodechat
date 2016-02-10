// Datastore setup
var Datastore = require('nedb');

var UserStore = new Datastore({
  filename: "users.db",
  autoload: true,
});

var RoomStore = new Datastore({
  filename: "rooms.db",
  autoload: true,
});

module.exports = {
    UserStore: UserStore,
    RoomStore: RoomStore
}