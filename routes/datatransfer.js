const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {
  
router.post('/newThought', (req, res) => {
	if(!req.body.value) {
		res.json({ success: false, message: 'You must input something'});
	} else {
		let thought = new Thought({
		value: req.body.value,
		user: req.body.user,
		linkTo: req.body.linkTo, 
		linkFrom: req.body.linkFrom, 
		equals: req.body.equals
		});
		thought.save((err) => {
			if (err) {
				res.json({ success: false, message: 'Could not save Thought. Error: ', err });
			} else {
				res.json({ success: true, message: 'Thought saved!'});
			}
		})
	}
});

  router.get('/allThought', (req, res) => {
    // Search database for all blog posts
    Thought.find({}, (err, thought) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if blogs were found in database
        if (!thought) {
          res.json({ success: false, message: 'No thoughts found.' }); // Return error of no blogs found
        } else {
          res.json({ success: true, thought: thought }); // Return success and blogs array
        }
      }
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
  });


  return router;
}