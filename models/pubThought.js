const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const pubThoughtSchema = new Schema({
    label: String,
    level: Number,
    likes: Number,
    views: Number,
    color: String,
    dimensions: {label: String, dimtype: String, val: String },
    showAs: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'PubThought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'PubThought'}],
    texture: String,
    privacy: String,
});

module.exports = mongoose.model('PubThought', pubThoughtSchema);
