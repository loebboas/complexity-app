const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const topLinkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    mid: {type: Schema.Types.ObjectId, ref: 'Thought'},
    top: {type: Schema.Types.ObjectId, ref: 'Thought'},
});

module.exports = mongoose.model('TopLink', topLinkSchema);