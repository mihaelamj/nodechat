//nodechatadmin
//nodechat29005606

// To connect using the mongo shell:
// mongo ds059195.mongolab.com:59195/mmjnodechat -u <dbuser> -p <dbpassword>
// To connect using a driver via the standard MongoDB URI (what's this?):
//   mongodb://<dbuser>:<dbpassword>@ds059195.mongolab.com:59195/mmjnodechat

var mongoose = require('mongoose');
//connect
var Store = mongoose.connect('mongodb://nodechatadmin:nodechat29005606@ds059195.mongolab.com:59195/mmjnodechat');

module.exports = {
    Store: Store
}
