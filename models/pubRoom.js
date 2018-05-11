const mongoose = require('mongoose');
const User = require('./user.js');
const PubThought = require('./pubThought.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const pubRoomSchema = new Schema({
    label: String,
    likes: Number,
    admin: {type: Schema.Types.ObjectId, ref: 'User'},
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'PubThought'}],
    inputTime: {type: Date, default: Date.now},
    visible: String,
    activeUsers: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('PubRoom', pubRoomSchema);
