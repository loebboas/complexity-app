const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    level: Number,
    color: String,
    clicks: Number,
    showAs: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    dimensions: [{ dim: String, val: String }],
    texture: String,
    privacy: String,
});

module.exports = mongoose.model('Thought', thoughtSchema);
