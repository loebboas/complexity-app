const mongoose = require('mongoose');
const User = require('./user.js');
const pubThought = require('./pubThought.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const pubRoomSchema = new Schema({
    label: String,
    level: Number,
    likes: Number,
    admin: {type: Schema.Types.ObjectId, ref: 'User'},
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'pubThought'}],
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PubRoom', pubRoomSchema);
