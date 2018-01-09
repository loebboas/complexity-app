const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    scale: {type: Schema.Types.ObjectId, ref: 'Thought'},
    thought: {type: Schema.Types.ObjectId, ref: 'Thought'},
   	type: String,
   	position: String,
   	strength: String,
   	privacy: String,
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Link', linkSchema);