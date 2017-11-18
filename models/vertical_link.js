const mongoose = require('mongoose');
const Thought = require('./thought.js');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const verticalLinkSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    context: {type: Schema.Types.ObjectId, ref: 'Thought'},
    meaning: {type: Schema.Types.ObjectId, ref: 'Thought'},
});

module.exports = mongoose.model('VerticalLink', verticalLinkSchema);
