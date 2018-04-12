const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    dimensions: { compApp: String, dat: Date, val: Number },
    showAs: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    texture: String,
    privacy: String,
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Thought', thoughtSchema);
