const mongoose = require('mongoose');
const User = require('./user.js');
const Thought = require('./thought.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const perspectiveSchema = new Schema({
    objId: { type: Schema.Types.ObjectId, ref: 'Thought' },
    label: String,
    dimensions: {
        levelDimensions: [{ label: String, objId: String, startValue: String, endValue: String, level: Number }],
        numberDimensions: [{ label: String, startValue: Number, endValue: Number }],
        tagDimensions: [{ label: String, tags: [String] }],
        locationDimensions: [{ label: String, startValue: String, endValue: String }],
        dateDimensions: [{ label: String, startValue: Date, endValue: Date }]
    }
});

module.exports = mongoose.model('Perspective', perspectiveSchema);
