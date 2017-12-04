const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');
const Link = require('./link.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: Schema.Types.ObjectId, ref: 'Thought'},
    link: {type: Schema.Types.ObjectId, ref: 'Link'},
    name: String,
    startTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Session', sessionSchema);