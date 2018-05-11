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
    grid: { colspan: Number, rowspan: Number, x: Number, y: Number, rows: Number, cols: Number },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    dimensions: [{label: String, dimtype: String, val: String }],
    texture: String,
    form: String,
    privacy: String,
});

module.exports = mongoose.model('Thought', thoughtSchema);
