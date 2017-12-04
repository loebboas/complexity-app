const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    mid: {type: Schema.Types.ObjectId, ref: 'Thought'},
    top: {type: Schema.Types.ObjectId, ref: 'Thought'},
    left: {type: Schema.Types.ObjectId, ref: 'Thought'},
    right: {type: Schema.Types.ObjectId, ref: 'Thought'},
    bot: {type: Schema.Types.ObjectId, ref: 'Thought'},
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Link', linkSchema);