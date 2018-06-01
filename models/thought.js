const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    label: String,
    color: String,
    clicks: Number,
    valued: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date, val: Number }],
    dateDim: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, label: String, val: Date }],
    locationDim: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, label: String, val: String }],
    numberDim: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, label: String, val: Number }],
    tagDim: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, label: String, val: String }],
    perspectives: [{ label: String, dimensions: [{ label: String, dimType: String, startValue: String, endValue: String}]}],
    createdBy: {user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date },
    shared: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date }],
    edited: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date, event: String, val: String }],
    deleted: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date }],
    contexts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    contents: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    texture: String,
    form: String,
    public: Boolean,
    changeableBy:  [{type: Schema.Types.ObjectId, ref: 'User'}],
    viewableBy:  [{type: Schema.Types.ObjectId, ref: 'User'}],
    viewedBy:  [{type: Schema.Types.ObjectId, ref: 'User'}],
    emotions: [{ user: {type: Schema.Types.ObjectId, ref: 'User'}, timestamp: Date, event: String, val: Number }]
});

module.exports = mongoose.model('Thought', thoughtSchema);
