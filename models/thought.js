const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    level: Number,
    color: String,
    form: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    character: {type: Schema.Types.ObjectId, ref: 'Thought'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    timelines: [{ timeline: {type: Schema.Types.ObjectId, ref: 'Thought'}, timevalue: Date }],   
    texture: String,
    privacy: String,
});

module.exports = mongoose.model('Thought', thoughtSchema);
