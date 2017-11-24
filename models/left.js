const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const leftLinkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    mid: {type: Schema.Types.ObjectId, ref: 'Thought'},
    left: {type: Schema.Types.ObjectId, ref: 'Thought'},
});

module.exports = mongoose.model('leftLink', leftLinkSchema);