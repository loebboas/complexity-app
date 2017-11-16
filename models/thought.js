const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
	value: String,
	user: String,
	linkTo: String, 
	linkFrom: String, 
	equals: String
}) 

module.exports = mongoose.model('Thought', thoughtSchema);
