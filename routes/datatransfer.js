const User = require('../models/user'); // Import User Model Schema
const Thought = require('../models/thought');
const BotLink = require('../models/bot');
const TopLink = require('../models/top');
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); // Import database configuration


module.exports = (router) => {

 /* ===============================================================
     ADD NEW THOUGHT
  =============================================================== */  

router.post('/newThought', (req, res) => {
	if(!req.body.value) {
		res.json({ success: false, message: 'You must input something'});
	} else {
		let thought = new Thought({
		value: req.body.value,
		user: req.body.user,
    top: req.body.top,
    bot: req.body.bot, 
    left: req.body.left,
    right: req.body.right 
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

 /* ===============================================================
     ADD NEW BOTLINK
  =============================================================== */  

router.post('/newBotLink', (req, res) => {
  if(!req.body.value) {
    res.json({ success: false, message: 'You must input something'});
  } else {
    let botLink = new BotLink({
    user: req.body.user,
    mid: req.body.mid,
    bot: req.body.bot 
    });
    thought.save((err) => {
      if (err) {
        res.json({ success: false, message: 'Could not save Link. Error: ', err });
      } else {
        res.json({ success: true, message: 'Link saved!'});
      }
    })
  }
});

 /* ===============================================================
     ADD NEW BOT
  =============================================================== */  

router.post('/newThoughtBot', (req, res) => {
  if(!req.body.value) {
    res.json({ success: false, message: 'You must input something'});
  } else {
    let thought = new Thought({
    value: req.body.value,
    user: req.body.userId,
    top: req.body.top
    });
    thought.save((err) => {
      if (err) {
        res.json({ success: false, message: 'Could not save Thought. Error: ', err });
      } else {
        res.json({ success: true, message: 'Thought saved!' });

        Thought.findOne({ _id: thought.top }, (err, thoughtMid) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid thought id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!thoughtMid) {
            res.json({ success: false, message: 'thought id was not found.' }); // Return error message
          } else {
                    thoughtMid.bot = thoughtMid.bot + thought._id;
                    thoughtMid.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err }); // Return error message
                        }
                      } else {
                        res.json({ success: true, message: 'Thought Updated!' }); // Return success message
                      }
                    });
          }
        }
        });
      }
    });
  }
});

   /* ===============================================================
     GET ALL THOUGHT
  =============================================================== */

  router.get('/allThought', (req, res) => {
    // Search database for all Thoughts
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


   /* ===============================================================
     GET ONE THOUGHT
  =============================================================== */
    router.get('/singleThought/:id', (req, res) => {

         if (!req.params.id) {
                res.json({ success: false, message: 'No thought ID was provided.' }); // Return error message
              } else {

              // Search database for Thought
              Thought.findOne({ _id: req.params.id}, (err, thought) => {
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
    });
  }
  });

   /* ===============================================================
     UPDATE ONE THOUGHT
  =============================================================== */
  router.put('/updateThought', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No thought id provided' }); // Return error message
    } else {
      // Check if id exists in database
      Thought.findOne({ _id: req.body._id }, (err, thought) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid thought id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!thought) {
            res.json({ success: false, message: 'thought id was not found.' }); // Return error message
          } else {
            // Check who user is that is requesting blog update
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                    thought.value = req.body.value; // Save value
                    thought.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err }); // Return error message
                        }
                      } else {
                        res.json({ success: true, message: 'Thought Updated!' }); // Return success message
                      }
                    });
                  
                
              }
            });
          }
        }
      });
    }
  });

  /* ===============================================================
     DELETE BLOG POST
  =============================================================== */
  router.delete('/deleteThought/:id', (req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      Thought.findOne({ _id: req.params.id }, (err, thought) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!thought) {
            res.json({ success: false, messasge: 'Thought was not found' }); // Return error message
          } else {
            // Get info on user who is attempting to delete post
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if user's id was found in database
                // Remove the blog from database
                    thought.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Thought deleted!' }); // Return success message
                      }
                    });
              }
            });
          }
        }
      });
    }
  });



  return router;
}