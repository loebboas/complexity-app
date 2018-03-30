const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    value: String,
    dimension: String,
    showAs: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{
        _id: {type: Schema.Types.ObjectId, ref: 'Thought'},
        label: String }],
    contents: [{
            _id: {type: Schema.Types.ObjectId, ref: 'Thought'},
            label: String,
            value: String,
            dimension: String,
            showAs: String  
        }],
    texture: String,
    privacy: String,
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Thought', thoughtSchema);
