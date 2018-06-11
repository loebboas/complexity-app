const mongoose = require('mongoose');
const User = require('./user.js');
const Thought = require('./thought.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const perspectiveSchema = new Schema({
    objId: { type: Schema.Types.ObjectId, ref: 'Thought' },
    label: String,
    dimensions: {
        levelDimensions: [{ label: String, objId: String, startValue: String, endValue: String, level: Number, selected: Boolean }],
        numberDimensions: [{ label: String, startValue: Number, endValue: Number, selected: Boolean }],
        tagDimensions: [{ label: String, tags: [String], selected: Boolean }],
        locationDimensions: [{ label: String, startValue: String, endValue: String, selected: Boolean }],
        dateDimensions: [{ label: String, startValue: Date, endValue: Date, selected: Boolean }]
    }
});

module.exports = mongoose.model('Perspective', perspectiveSchema);
