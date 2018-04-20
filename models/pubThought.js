const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const pubThoughtSchema = new Schema({
    label: String,
    level: Number,
    likes: Number,
    dimensions: { dim: String, val: String },
    showAs: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    texture: String,
    privacy: String,
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PubThought', pubThoughtSchema);
