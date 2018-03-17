const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    links: [{
        _id: {type: Schema.Types.ObjectId, ref: 'Thought'},
        linktype: String,
        label: String }],
    time: String,
    form: String,
    texture: String,
    privacy: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    inputTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Thought', thoughtSchema);
