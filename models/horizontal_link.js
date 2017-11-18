const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const horizontalLinkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    thought1: {type: Schema.Types.ObjectId, ref: 'Thought'},
    thought2: {type: Schema.Types.ObjectId, ref: 'Thought'},
});

module.exports = mongoose.model('HorizontalLink', horizontalLinkSchema);
